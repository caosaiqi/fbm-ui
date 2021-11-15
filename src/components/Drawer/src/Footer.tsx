import React, { useState } from 'react'
import { ModalProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Box from '../../Box'
import Button, { FbmButtonProps } from '../../Button'

export interface FbmFooterProps {
  onOk?: (event: any) => void | Promise<void>;
  onClose?: ModalProps['onClose'];
  okText: string;
  closeText: string;
  /** footer 取消按钮props */
  okProps?: FbmButtonProps;
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
    onClose,
    okProps
  } = props
  const [okLoading, setOkLoading] = useState(false)

  const okDefaultProps = {
    loading: okLoading,
    ...okProps
  }
  
  const doOk = async (event) => {
    if (onOk && typeof onOk === 'function') {
      setOkLoading(true)
      const f = await onOk(event)
      setOkLoading(false)
      if (f === undefined || f) {
        doClose(event)
      }
    }
  }

  const doClose = (event) => onClose(event, 'backdropClick')

  return (
    <FooterRoot>
      <Button sx={{ mr: '8px' }} variant="text" onClick={doClose}>
        {closeText}
      </Button>
      <Button
        {...okDefaultProps}
        onClick={doOk}>
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
  okProps: {}
}

export default FbmFooter
