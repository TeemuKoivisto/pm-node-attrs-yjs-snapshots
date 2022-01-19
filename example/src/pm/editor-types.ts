import { EditorState, Transaction } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'

export type CommandDispatch = (tr: Transaction) => void
export type Command = (state: EditorState, dispatch?: CommandDispatch, view?: EditorView) => boolean
export type HigherOrderCommand = (command: Command) => Command

export interface JSONEditorState {
  doc: { [key: string]: any }
  selection: { [key: string]: any }
  plugins: { [key: string]: any }
}
export type JSONPMNode = { [key: string]: any }