import React from 'react'
import styled from 'styled-components'

import { useEditorContext } from 'pm/context/EditorContext'

interface IProps {
  className?: string
}

export function ChangesControls(props: IProps) {
  const { className } = props
  const { snapshotProvider } = useEditorContext()

  function handleSnapshot() {
    snapshotProvider.createSnapshot()
  }
  return (
    <Container className={className}>
      <button onClick={() => handleSnapshot()}>
        Snapshot
      </button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  button {
    margin: 0.05rem;
  }
`
