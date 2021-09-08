import React, { useMemo } from 'react'
import styled from 'styled-components'

import { applyDevTools } from 'prosemirror-dev-tools'

import { Toolbar } from '../Toolbar'
import { RightPanel } from './RightPanel'

import { PMEditor } from 'pm/PMEditor'
import { ReactEditorContext } from 'pm/context/EditorContext'
import { createDefaultProviders, IProviders } from 'pm/context/Providers'

export function Editor() {
  const editorProviders = useMemo(() => createDefaultProviders(), [])

  function handleEditorReady(ctx: IProviders) {
    applyDevTools(ctx.viewProvider.view)
  }
  return (
    <ReactEditorContext.Provider value={editorProviders}>
      <div>
        <ViewGrid>
          <LeftSide>
            <Toolbar className="toolbar 'full-width"/>
            <div className="pm-editor full-width">
              <PMEditor
                onEditorReady={handleEditorReady}
              />
            </div>
          </LeftSide>
          <RightPanel/>
        </ViewGrid>
      </div>
    </ReactEditorContext.Provider>
  )
}

const ViewGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  margin-top: 1rem;
`
const LeftSide = styled.div`
  margin-right: 1rem;
`