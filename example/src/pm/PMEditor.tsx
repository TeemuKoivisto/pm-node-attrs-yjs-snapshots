import React, { useLayoutEffect, useRef } from 'react'
import { EditorView } from 'prosemirror-view'
import { EditorState, Transaction } from 'prosemirror-state'

import { schema } from './schema'

import { plugins } from './plugins'

import { EditorContext, useEditorContext } from './context/EditorContext'
import { IProviders } from './context/Providers'

import './editor.css'
import './prosemirror-example-setup.css'
import './menu.css'
import './yjs.css'

interface EditorProps {
  className?: string
  onEditorReady?: (providers: IProviders) => void
  onEdit?: (state: EditorState) => void
}

export function PMEditor(props: EditorProps) {
  const { className = '' } = props
  const editorViewRef = useRef(null)
  const editorRef = useRef<EditorView | null>(null)
  const ctx = useEditorContext()

  useLayoutEffect(() => {
    ctx.yjsProvider.init()
    const state = createEditorState(ctx)
    const editorViewDOM = editorViewRef.current
    if (editorViewDOM) {
      editorRef.current = createEditorView(editorViewDOM, state)
      ctx.viewProvider.init(editorRef.current)
      props.onEditorReady && props?.onEditorReady(ctx)
    }
    return () => {
      editorRef.current?.destroy()
    }
  }, [])

  function createEditorState(ctx: EditorContext) {
    return EditorState.create({
      schema,
      plugins: plugins(ctx)
    })
  }

  function createEditorView(element: HTMLDivElement, state: EditorState) {
    const view = new EditorView({ mount: element }, {
      state,
      dispatchTransaction,
    })
    // @ts-ignore
    if (window) window.editorView = view
    return view
  }

  function dispatchTransaction(transaction: Transaction) {
    if (!editorRef.current) {
      return
    }
    const oldEditorState = editorRef.current.state
    const editorState = oldEditorState.apply(transaction)
    editorRef.current.updateState(editorState)
    if (props.onEdit) {
      props.onEdit(editorState)
    }
  }

  return (
    <div id="example-editor" ref={editorViewRef} className={className}/>
  )
}
