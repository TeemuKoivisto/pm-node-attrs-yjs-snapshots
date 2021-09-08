import { useState, useEffect } from 'react'

import { useEditorContext } from '../context/EditorContext'
import type { SnapshotProviderState } from 'pm/context/SnapshotProvider'

export function useSnapshotProvider() {
  const { snapshotProvider } = useEditorContext()

  const [state, setState] = useState<SnapshotProviderState>(snapshotProvider.state)

  useEffect(() => {
    const cb = (newState: SnapshotProviderState) => {
      setState(newState)
    }
    setState(snapshotProvider.state)
    snapshotProvider.onUpdate(cb)
    return () => {
      snapshotProvider.offUpdate(cb)
    }
  }, [snapshotProvider])

  return state
}
