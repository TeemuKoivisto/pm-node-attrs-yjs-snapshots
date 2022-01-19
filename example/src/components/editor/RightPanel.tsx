import React from 'react'
import styled from 'styled-components'

import { ChangesControls } from './ChangesControls'
import { SnapshotsList } from './SnapshotsList'

export function RightPanel() {
  return (
    <RightSide>
      <ChangesControls className="changes-controls"/>
      <SnapshotsList />
    </RightSide>
  )
}

const RightSide = styled.div``
