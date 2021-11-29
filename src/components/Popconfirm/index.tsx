import React from 'react';
import styled from '@mui/material/styles/styled'

import Popover from '../Popover'
import Box from '../Box'
import ConfirmFooter, { FbmConfirmFooterProps } from '../ConfirmFooter'

interface FbmPopoverForm extends FbmConfirmFooterProps {
  content?: React.ReactNode;
}

const ContentRoot = styled(Box)()

const FooterRoot = styled(ConfirmFooter)({
  padding: '16px'
})


const contentRender = (props: any) => {
  const {
    onOk,
    onClose,
    content,
  } = props

  const handleOK = async () => {
    if (onOk && typeof onOk === 'function') {
      await onOk(props)
    }
    onClose()
  }

  return (
    <ContentRoot>
      {content}
      <FooterRoot onOk={handleOK} onClose={onClose} />
    </ContentRoot>
  )
}


const FbmPopoverForm: React.FC<FbmPopoverForm> = (props) => {
  const { onOk, content, children, ...otherProps} = props
  return (
    <Popover 
      content={(popoverProps) => contentRender({ onOk, content, ...popoverProps })}
      {...otherProps}
    >
      {children}
    </Popover>
  )
}

export default FbmPopoverForm