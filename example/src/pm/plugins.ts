import { exampleSetup } from 'prosemirror-example-setup'
import { keymap } from 'prosemirror-keymap'
import { ySyncPlugin, yCursorPlugin, yUndoPlugin, undo, redo } from 'y-prosemirror'

import { EditorContext } from 'pm/context/EditorContext'
import { schema } from './schema'

export const plugins = (ctx: EditorContext) =>
  [
    ySyncPlugin(ctx.yjsProvider.yXmlFragment, {
      permanentUserData: ctx.yjsProvider.permanentUserData,
      colors: [
        { light: '#ecd44433', dark: '#ecd444' },
        { light: '#ee635233', dark: '#ee6352' },
        { light: '#6eeb8333', dark: '#6eeb83' }
      ]
    }),
    // yCursorPlugin(ctx.yjsProvider.provider.awareness),
    yUndoPlugin(),
    keymap({
      'Mod-z': undo,
      'Mod-y': redo,
      'Mod-Shift-z': redo
    }),
  ].concat(exampleSetup({ schema, history: false }))
