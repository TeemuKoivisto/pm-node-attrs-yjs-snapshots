import React from 'react'
import styled from 'styled-components'

import { FiAtSign } from 'react-icons/fi'

import { useEditorContext } from 'pm/context/EditorContext'
import { setBlockNodeAttribute } from 'pm/commands'

interface IProps {
  className?: string
}

type IconType = 'update-attribute'

const commandIcons: {
  title: IconType
  icon: React.ReactNode
}[] = [
  {
    title: 'update-attribute',
    icon: <FiAtSign size={16} />
  },
]

export function Toolbar(props: IProps) {
  const { className } = props
  const { viewProvider } = useEditorContext()

  function handleIconClick(title: IconType) {
    switch (title) {
      case 'update-attribute':
        viewProvider.execCommand(setBlockNodeAttribute())
        return
    }
  }
  return (
    <Container className={className}>
      <IconList>
        {commandIcons.map(item =>
          <IconItem key={item.title}>
            <IconButton onClick={() => handleIconClick(item.title)}>
              {item.icon}
            </IconButton>
          </IconItem>
        )}
      </IconList>
    </Container>
  )
}

const Container = styled.div`
  background: var(--color-primary-lighter);
  padding: 1rem;
`
const IconList = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`
const IconItem = styled.li`
  & + & {
    margin-left: 1rem;
  }
`
const IconButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  padding: 0.25rem;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    opacity: 0.7;
  }
  &.active {
    background: rgb(215 227 255);
    box-shadow: 0 0 2px 2px rgb(0 0 0 / 18%);
  }
`
