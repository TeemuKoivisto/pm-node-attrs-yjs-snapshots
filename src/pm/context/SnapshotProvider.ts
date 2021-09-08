import * as Y from 'yjs'
import { ySyncPluginKey, ProsemirrorBinding } from 'y-prosemirror'

import { EditorViewProvider } from './EditorViewProvider'
import { YjsProvider } from './YjsProvider'
import { Observable } from '../Observable'

import { Snapshot, createSnapshot } from './snapshots'

export interface SnapshotProviderState {
  snapshots: Y.Array<Snapshot>
  selectedSnapshot: Snapshot | null
}

export class SnapshotProvider {

  _observable = new Observable<'update'>()
  viewProvider: EditorViewProvider
  yjsProvider: YjsProvider

  snapshots: Y.Array<Snapshot> = new Y.Array()
  selectedSnapshot: Snapshot | null = null

  constructor(viewProvider: EditorViewProvider, yjsProvider: YjsProvider) {
    this.viewProvider = viewProvider
    this.yjsProvider = yjsProvider
    yjsProvider.onInit(() => {
      // This is so ridiculous
      // But the reason is that the versions is updated async as it's fetched from the server
      // (or loaded from indexedDB) so this is the only way to get correctly notified when that happens.
      // Actually, I might have to keep the observer now that I think of it...
      const self = this
      yjsProvider.ydoc.getArray<Snapshot>('pm-doc-versions').observe(function callback() {
        self.updateVersions()
        yjsProvider.ydoc.getArray<Snapshot>('pm-doc-versions').unobserve(callback)
      })
    })
  }

  get state() : SnapshotProviderState {
    return {
      snapshots: this.snapshots,
      selectedSnapshot: this.selectedSnapshot,
    }
  }

  updateVersions() {
    const versions = this.yjsProvider.ydoc.getArray<Snapshot>('pm-doc-versions')
    this.snapshots = versions
    this._observable.emit('update', this.state)
  }

  createSnapshot() {
    const ydoc = this.yjsProvider.ydoc
    const versions = ydoc.getArray<Snapshot>('pm-doc-versions')
    const prevVersion = versions.length === 0 ? null : versions.get(versions.length - 1)
    console.info(prevVersion)
    const prevSnapshot = prevVersion === null ? Y.emptySnapshot : Y.decodeSnapshot(prevVersion.snapshot)
    const snapshot = Y.snapshot(ydoc)
    console.info('created snapshot', snapshot)
    if (prevVersion != null) {
      // account for the action of adding a version to ydoc
      const prevVersionID = prevSnapshot.sv.get(prevVersion.clientID)
      if (!prevVersionID) {
        throw Error('Yjs prevVersionID was undefined!')
      }
      prevSnapshot.sv.set(prevVersion.clientID, prevVersionID + 1)
    }
    if (!Y.equalSnapshots(prevSnapshot, snapshot)) {
      versions.push([createSnapshot(snapshot, ydoc.clientID)])
      this.updateVersions()
    }
  }

  inspectSnapshot(snap: Snapshot | undefined) {
    console.log('snap', snap)
    if (!snap || this.selectedSnapshot?.date === snap.date) {
      return this.resumeEditing()
    }
    const versions = this.yjsProvider.ydoc.getArray<Snapshot>('pm-doc-versions')
    const ySnapshot = Y.decodeSnapshot(snap.snapshot)
    console.log('inspect snapshot', ySnapshot)
    let prevYSnapshot: Y.Snapshot = Y.emptySnapshot, foundPrevVersion = false
    versions.forEach((s => {
      if (s.date === snap.date) {
        foundPrevVersion = true
      } else if (!foundPrevVersion) {
        prevYSnapshot = Y.decodeSnapshot(s.snapshot)
      }
    }))
    const binding: ProsemirrorBinding | null = ySyncPluginKey.getState(this.viewProvider.view.state).binding
    if (binding) {
      binding.renderSnapshot(ySnapshot, prevYSnapshot)
    }
    this.selectedSnapshot = snap
    this._observable.emit('update', this.state)
  }

  deleteSnapshot(snap: Snapshot) {
    const versions = this.yjsProvider.ydoc.getArray<Snapshot>('pm-doc-versions')
    versions.forEach((v, i) => {
      if (v.date === snap.date) {
        versions.delete(i)
        this._observable.emit('update', this.state)
      }
    })
  }

  resumeEditing() {
    const binding: ProsemirrorBinding | null = ySyncPluginKey.getState(this.viewProvider.view.state).binding
    if (binding) {
      binding.unrenderSnapshot()
    }
    this.selectedSnapshot = null
    this._observable.emit('update', this.state)
  }

  onUpdate(cb: (data: any) => void) {
    this._observable.on('update', cb)
  }

  offUpdate(cb: (data: any) => void) {
    this._observable.off('update', cb)
  }
}
