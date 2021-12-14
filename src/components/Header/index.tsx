import React from 'react';
import styled from '@mui/material/styles/styled'

import Box from '../Box'
import Typography from '../Typography'
import Actions, { FbmActionProps } from '../Actions'


export interface FbmHeaderProps {
  title?: React.ReactNode;
  actions?: FbmActionProps['actions']
}

const PageHeaderRoot = styled(Box)({
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
})

const TitleRender: React.FC = ({ children }) => (
  <Box sx={{ flex: 1 }}>
    <Typography variant='h6'>
      {children}
    </Typography>
  </Box>
)

const FbmHeader: React.FC<FbmHeaderProps> = ({
  title,
  actions
}) => {
  return (
    <PageHeaderRoot>
      <TitleRender> {title} </TitleRender>
      <Actions actions={actions} />
    </PageHeaderRoot>
  )
}

FbmHeader.defaultProps = {
  title: '',
  actions: []
}

export default FbmHeader