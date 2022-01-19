import * as Y from 'yjs'

export interface Snapshot {
  date: number
  snapshot: Uint8Array
  clientID: number
}

export function createSnapshot(ysnap: Y.Snapshot, clientID: number): Snapshot {
  return {
    date: new Date().getTime(),
    snapshot: Y.encodeSnapshot(ysnap),
    clientID,
  }
}