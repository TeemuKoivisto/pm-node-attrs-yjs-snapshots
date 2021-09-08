import React, { useState } from 'react'
import styled from 'styled-components'

import { FiChevronDown, FiChevronRight } from 'react-icons/fi'

import { useEditorContext } from 'pm/context/EditorContext'
import { useSnapshotProvider } from 'pm/react/useSnapshotProvider'

import { Snapshot } from 'pm/context/snapshots'

interface IProps {
  className?: string
}

export function SnapshotsList(props: IProps) {
  const { className } = props
  const [isVisible, setIsVisible] = useState(true)
  const { snapshotProvider } = useEditorContext()
  const snapshotsState = useSnapshotProvider()

  function handleInspectSnapshot(snap: Snapshot) {
    snapshotProvider.inspectSnapshot(snap)
  }
  function handleResumeEditing() {
    snapshotProvider.resumeEditing()
  }
  function handleDeleteSnapshot(snap: Snapshot) {
    snapshotProvider.deleteSnapshot(snap)
  }
  return (
    <>
    <Header>
      <button onClick={() => setIsVisible(!isVisible)} className="header-btn">
        <span>{ isVisible ? <FiChevronDown size={16}/> : <FiChevronRight size={16}/>}</span>
        <Title>Snapshots</Title>
      </button>
      <button
        className={`inspect-btn ${snapshotsState.selectedSnapshot ? '' : 'hidden'}`}
        onClick={() => handleResumeEditing()}
      >
        Stop inspecting
      </button>
    </Header>
    <List className={`${className} ${isVisible ? '' : 'hidden'}`}>
      { snapshotsState?.snapshots.map((snap: Snapshot, i: number) =>
      <SnapListItem
        key={`${snap.date}-${i}`}
      >
        <TitleWrapper>
          <h4>Snapshot {i + 1}</h4>
          <Buttons>
            <button onClick={() => handleInspectSnapshot(snap)}>
              Inspect
            </button>
            <button onClick={() => handleDeleteSnapshot(snap)}>
              Delete
            </button>
          </Buttons>
        </TitleWrapper>
        <small>{new Date(snap.date).toLocaleString()}</small>
      </SnapListItem>
      )}
    </List>
    </>
  )
}

const Header = styled.div`
  align-items: center;
  display: flex;
  margin: 1rem 0 0.5rem 0;
  & > .header-btn {
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    margin: 0;
    padding: 0;
  }
  & > .inspect-btn {
    margin-left: 1rem;
  }
  .hidden {
    visibility: hidden;
  }
`
const Title = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 0 0.5rem;
  text-transform: uppercase;
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  max-height: 300px;
  overflow-y: scroll;
  padding: 0;
  &.hidden {
    display: none;
    visibility: hidden;
  }
  & > li:nth-child(odd) {
    background: #f3f3f3;
  }
`
const SnapListItem = styled.li`
  border-radius: 2px;
  padding: 0.25rem;
`
const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  & > h4 {
    margin: 0;
    margin-right: 1rem;
  }
`
const Buttons = styled.div`
  display: flex;
  margin: 0.25rem 0;
  button + button {
    margin-left: 0.5rem;
  }
`
