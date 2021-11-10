import React from 'react'
import { ModalProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Box from '../../Box'
import Button from '../../Button'

export interface FbmFooterProps {
  onOk?: () => void;
  onClose?: ModalProps['onClose'];
  okText: string;
  closeText: string;
}

const FooterRoot = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '80px',
  padding: '24px',
  borderTop: '1px solid rgba(0,0,0,0.08)'
})

const FbmFooter: React.FC<FbmFooterProps> = (props) => {
  const {
    okText,
    closeText,
    onOk,
    onClose
  } = props

  const handleOk = () => onOk()

  const handleCancel = (event) => onClose(event, 'backdropClick')

  return (
    <FooterRoot>
      <Button sx={{ mr: '8px' }} variant="text" onClick={handleCancel}>
        {closeText}
      </Button>
      <Button onClick={handleOk}>
        {okText}
      </Button>
    </FooterRoot>
  )
}

FbmFooter.defaultProps = {
  onOk: () => { },
  onClose: () => { },
  okText: '确定',
  closeText: '取消',
}

export default FbmFooter
