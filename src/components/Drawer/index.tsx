import React from 'react';

import Root from './src/Root'
import Content from './src/Content'
import Footer from './src/Footer'
import { FbmConfirmFooterProps } from '../ConfirmFooter'

export interface FbmDrawerProps extends FbmConfirmFooterProps {
  open: boolean;
  footer?: React.ReactNode | null;
  zIndex?: number;
}

const FbmDrawer: React.FC<FbmDrawerProps> = (props) => {
  const {
    children,
    onOk,
    onClose,
    okText,
    closeText,
    open,
    okProps,
    footer,
  } = props

  const footerProps = {
    footer,
    onOk,
    onClose,
    okText,
    closeText,
    okProps,
  }

  const drawerProps = {
    open,
    anchor: 'right',
    onClose
  }

  return (
    <Root {...drawerProps}>
      <Content>
        {children}
      </Content>
      <Footer {...footerProps} />
    </Root>
  )
}

FbmDrawer.defaultProps = {
  open: false,
}

export default FbmDrawer
