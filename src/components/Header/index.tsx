import React from 'react';
import styled from '@mui/material/styles/styled'

import Box from '../Box'
import Typography from '../Typography'
import Actions, { FbmActionProps } from '../Actions'

export interface FbmHeaderProps {
  /** 标题 */
  title?: React.ReactNode;
  /** 操作, 具体参数可查看Actions组件 */
  actions?: FbmActionProps['actions']
  /** 自定义action组件 */
  renderAction?: () => React.ReactNode;
}

const PageHeaderRoot = styled(Box)({
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
})

const TitleRender: React.FC = ({ children }) => (
  <Box sx={{ flex: 1 }}>
    <Typography variant='h6' weight='medium'>
      {children}
    </Typography>
  </Box>
)

const FbmHeader: React.FC<FbmHeaderProps> = ({
  title,
  actions,
  renderAction
}) => {
  let action = null
  if (typeof renderAction === 'function') {
    action = renderAction()
  } else {
    action = <Actions actions={actions} />;
  }
  
  return (
    <PageHeaderRoot>
      <TitleRender> {title} </TitleRender>
      {action}
    </PageHeaderRoot>
  )
}

FbmHeader.defaultProps = {
  title: '',
  actions: []
}

export default FbmHeader