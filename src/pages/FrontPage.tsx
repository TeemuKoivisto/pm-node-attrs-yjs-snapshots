import React from 'react'
import styled from 'styled-components'

import { Editor } from '../components/editor/Editor'

export function FrontPage() {
  return (
    <Container>
      <header>
        <h1><a href="https://teemukoivisto.github.io/pm-node-attrs-yjs-snapshots/">
          ProseMirror node attributes persistence with Yjs snapshots</a></h1>
        <p>Somehow I can't get them to work</p>
        <p><a href="https://github.com/TeemuKoivisto/pm-node-attrs-yjs-snapshots">Github repo</a></p>
      </header>
      <Editor/>
    </Container>
  )
}

const Container = styled.div``
