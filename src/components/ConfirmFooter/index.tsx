import React from 'react'
import styled from '@mui/material/styles/styled'

import Box from '../Box'
import Button, { FbmButtonProps } from '../Button'

// type SizeMap = 'small' | 'medium' | 'large'

export interface FbmConfirmFooterProps {
  /** 确定按钮 */
  onOk?: (props: FbmConfirmFooterProps) => void | Promise<void>;
  /** 确定按钮文案 */
  okText?: string;
  /** 确定按钮按钮ButtonProps  */
  okProps?: FbmButtonProps;
  /** 是否禁用确定按钮  */
  okDisabled?: boolean;
  /** 是否需要取消按钮 */
  isCloseButton?: boolean;
  /** 是否需要取消按钮 */
  onClose?: () => void | Promise<void>;
  /** 确定按钮文案 */
  closeText?: string;
  /** 取消按钮ButtonProps  */
  closeProps?: FbmButtonProps;
  /** 自定义Footer  */
  footer?: React.ReactNode
}

const ConfirmFooterRoot = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '56px'
})

const FbmConfirmFooter: React.FC<FbmConfirmFooterProps> = React.forwardRef((props, ref) => {
  const {
    onOk,
    okText,
    okDisabled,
    okProps,
    isCloseButton,
    onClose,
    closeText,
    closeProps,
    footer,
    ...otherProps
  } = props
  const [loading, setLoading] = React.useState(false)

  const handleClose = async () => {
    if (onClose) {
      try {
        await onClose()
      } catch (error) {
        throw error
      }
    }
  }
  const closeButtonProps = {
    onClick: handleClose,
    sx: { mr: '8px' },
    ...closeProps
  }
  const CloseButton: React.FC = () => {
    if (!isCloseButton) return null
    return (
      <Button variant='text'  {...closeButtonProps}>
        {closeText}
      </Button>
    )
  }

  const handleOk = async () => {
    if (onOk) {
      try {
        setLoading(true)
        await onOk(props)
        setLoading(false)
      } catch (error) {
        throw error
      }
    }
  }
  const okButtonProps = {
    loading,
    disabled: okDisabled,
    onClick: handleOk,
    ...okProps
  }
  const OkButton: React.FC = () => (
    <Button {...okButtonProps}>
      {okText}
    </Button>
  )

  return (
    <ConfirmFooterRoot {...otherProps} ref={ref}>
      <CloseButton />
      <OkButton />
    </ConfirmFooterRoot>
  )
})


FbmConfirmFooter.defaultProps = {
  okDisabled: false,
  okText: '确定',
  okProps: {},
  isCloseButton: true,
  closeProps: {},
  closeText: '取消'
}

export default FbmConfirmFooter