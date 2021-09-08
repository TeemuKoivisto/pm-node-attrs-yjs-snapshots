import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

import { EditorViewProvider } from './EditorViewProvider'
import { Observable } from '../Observable'

const testUsers = [
  { username: 'Alice', color: '#ecd444', lightColor: '#ecd44433' },
  { username: 'Bob', color: '#ee6352', lightColor: '#ee635233' },
  { username: 'Max', color: '#6eeb83', lightColor: '#6eeb8333' }
]

export class YjsProvider {

  _observable = new Observable<'init'>()
  viewProvider: EditorViewProvider

  _ydoc?: Y.Doc
  _permanentUserData?: Y.PermanentUserData
  _provider?: WebsocketProvider
  _yXmlFragment?: Y.XmlFragment

  constructor(viewProvider: EditorViewProvider) {
    this.viewProvider = viewProvider
  }

  get ydoc() {
    if (!this._ydoc) throw Error('YjsProvider ydoc accessed without initialization!')
    return this._ydoc
  }

  get provider() {
    if (!this._provider) throw Error('YjsProvider provider accessed without initialization!')
    return this._provider
  }

  get yXmlFragment() {
    if (!this._yXmlFragment) Error('YjsProvider yXmlFragment accessed without initialization!')
    return this._yXmlFragment
  }

  get permanentUserData() {
    if (!this._permanentUserData) Error('YjsProvider permanentUserData accessed without initialization!')
    return this._permanentUserData
  }

  init() {
    this._ydoc = new Y.Doc()
    this._permanentUserData = new Y.PermanentUserData(this._ydoc)
    const user = testUsers[Math.floor(Math.random() * 3)]
    this._permanentUserData.setUserMapping(this._ydoc, this._ydoc.clientID, user.username)
    this._ydoc.gc = false
    this._provider = new WebsocketProvider('wss://demos.yjs.dev', 'prosemirror-versions-demo', this._ydoc)
    this._yXmlFragment = this._ydoc.getXmlFragment('pm-doc')
    this._observable.emit('init')
  }

  onInit(cb: (data: any) => void) {
    this._observable.on('init', cb)
  }

  offInit(cb: (data: any) => void) {
    this._observable.off('init', cb)
  }
}
