import React from 'react';
import { Drawer, DrawerProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Box from '../Box'
import Footer, { FbmFooterProps } from './src/Footer'



interface FbmDrawerProps extends DrawerProps, FbmFooterProps {
  footer?: React.ReactNode;
}

const DrawerContent = styled(Box)({
  height: 'calc(100vh - 80px)',
  overflowY: 'auto'
})

const FbmDrawer: React.FC<FbmDrawerProps> = (props) => {
  const {
    onOk,
    onClose,
    okText,
    closeText,

    children,

    ...dividerProps
  } = props

  const footerProps = {
    onOk,
    onClose,
    okText,
    closeText,
  }

  return (
    <Drawer {...dividerProps}>
      <DrawerContent>
        {children}
      </DrawerContent>
      <Footer {...footerProps} />
    </Drawer>
  )
}

FbmDrawer.defaultProps = {
  open: false,
  anchor: 'right'
}

export default FbmDrawer
