import { EditorView } from 'prosemirror-view'
import { EditorState } from 'prosemirror-state'
import { ExampleSchema } from '../schema'

import { Command, JSONEditorState } from '../editor-types'

export class EditorViewProvider {

  _view?: EditorView<ExampleSchema>

  init(view: EditorView<ExampleSchema>) {
    this._view = view
  }

  get view(): EditorView<ExampleSchema> {
    if (!this._view) {
      throw Error('EditorViewProvider view accessed without EditorView instance')
    }
    return this._view
  }

  execCommand(cmd: Command) {
    cmd(this.view.state, this.view.dispatch)
    this.focus()
  }

  focus() {
    if (!this._view || this._view.hasFocus()) {
      return false
    }
    this._view.focus()
    this._view.dispatch(this._view.state.tr.scrollIntoView())
    return true
  }
  
  stateToJSON() {
    const state = this.view.state.toJSON()
    return { ...state, plugins: [] } as unknown as JSONEditorState
  }

  hydrateStateFromJSON(rawValue: Object) {
    const state = EditorState.fromJSON({
      schema: this.view.state.schema,
      plugins: this.view.state.plugins,
    }, rawValue)

    this.view.updateState(state)
    // Fire an empty transaction to trigger PluginStateProvider to update
    this.view.dispatch(this.view.state.tr)
  }

  replaceState(state: EditorState) {
    this.view.updateState(state)
    this.view.dispatch(this.view.state.tr)
  }
}