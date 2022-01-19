import { EditorViewProvider } from './EditorViewProvider'
import { SnapshotProvider } from './SnapshotProvider'
import { YjsProvider } from './YjsProvider'

export { EditorViewProvider } from './EditorViewProvider'
export { SnapshotProvider } from './SnapshotProvider'
export { YjsProvider } from './YjsProvider'

export interface IProviders {
  viewProvider: EditorViewProvider
  snapshotProvider: SnapshotProvider
  yjsProvider: YjsProvider
}

export const createDefaultProviders = (): IProviders => {
  const viewProvider = new EditorViewProvider()
  const yjsProvider = new YjsProvider(viewProvider)
  const snapshotProvider = new SnapshotProvider(viewProvider, yjsProvider)
  return {
    viewProvider,
    snapshotProvider,
    yjsProvider,
  }
}
