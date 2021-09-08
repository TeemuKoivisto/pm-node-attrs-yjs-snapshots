import type { Command } from './editor-types'

export const setBlockNodeAttribute = () : Command => (state, dispatch) => {
  const cursor = state.selection.head
  const blockNodePos = state.doc.resolve(cursor).start(1) - 1
  const node = state.doc.nodeAt(blockNodePos)
  let tr
  if (node?.attrs.makeMeRed) {
    tr = state.tr.setNodeMarkup(blockNodePos, undefined, { makeMeRed: false })
  } else {
    tr = state.tr.setNodeMarkup(blockNodePos, undefined, { makeMeRed: true })
  }
  if (dispatch) {
    dispatch(tr)
    return true
  }
  return false
}