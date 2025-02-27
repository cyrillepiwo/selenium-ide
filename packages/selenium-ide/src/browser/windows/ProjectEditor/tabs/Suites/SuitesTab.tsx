import Box from '@mui/material/Box'
import React from 'react'
import SuiteEditor from './Editor'
import SuiteViewer from './Viewer'
import { SIDEMainProps } from '../../../../components/types'
import AppBar from '../../../../components/AppBar'
import SuiteSelector from './SuiteSelector'

const SuitesTab: React.FC<
  Pick<SIDEMainProps, 'session' | 'setTab' | 'tab'>
> = ({ session, setTab, tab }) => {
  const Component =
    session.state.editor.suiteMode === 'editor' ? SuiteEditor : SuiteViewer

  return (
    <Box className="fill flex flex-col">
      <Box className="flex-initial">
        <AppBar
          session={session}
          setTab={setTab}
          tab={tab}
        />
      </Box>
      <Box className="flex-1 flex-col">
        <SuiteSelector session={session} />
        <Component session={session} />
      </Box>
    </Box>
  )
}

export default SuitesTab
