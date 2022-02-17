import React from 'react';

import DrawerRoot, { FbmDrawerRootProps } from './src/DrawerRoot'
import Content from './src/Content'
import Footer from './src/Footer'
import { FbmConfirmFooterProps } from '../ConfirmFooter'

export interface FbmDrawerProps extends FbmConfirmFooterProps {
  open: boolean;
  footer?: React.ReactNode | null;
  anchor?: FbmDrawerRootProps['anchor'];
}

const FbmDrawer: React.FC<FbmDrawerProps> = (props) => {
  const {
    open,
    anchor,
    children,
    onOk,
    onClose,
    okText,
    closeText,
    okProps,
    closeProps,
    footer,
  } = props

  const drawerProps = {
    open,
    anchor,
    onClose
  }

  return (
    <DrawerRoot
      open={open}
      anchor={anchor}
      onClose={onClose}
      {...drawerProps}
    >
      <Content>
        {children}
      </Content>
      <Footer
        footer={footer}
        onOk={onOk}
        onClose={onClose}
        okText={okText}
        closeText={closeText}
        okProps={okProps}
        closeProps={closeProps}
      />
    </DrawerRoot>
  )
}

FbmDrawer.defaultProps = {
  open: false,
  anchor: 'right'
}

export default FbmDrawer
