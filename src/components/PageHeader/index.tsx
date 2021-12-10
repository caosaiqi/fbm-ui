import React from 'react';
import styled from '@mui/material/styles/styled'

import Box from '../Box'
import Typography from '../Typography'
import Button, { FbmButtonProps } from '../Button'
import Popactions from '../Popactions'
import Actions from '../Actions'


interface ActionItemType extends FbmButtonProps {
  actions: FbmButtonProps[]
}

interface PropsType {
  title?: React.ReactNode;
  actions?: ActionItemType[]
}

const PageHeaderRoot = styled(Box)({
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
})

const TitleRender: React.FC = ({ children }) => (
  <Box sx={{ flex: 1 }}>
    <Typography variant='h5'>
      {children}
    </Typography>
  </Box>
)

const PageHeader: React.FC<PropsType> = ({
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

PageHeader.defaultProps = {
  title: '',
  actions: []
}

export default PageHeader