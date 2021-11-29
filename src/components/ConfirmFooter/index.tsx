import React from 'react'
import styled from '@mui/material/styles/styled'

import Box from '../Box'
import Button, { FbmButtonProps } from '../Button'

type sizeMap = 'small' | 'medium' | 'large'

export interface FbmConfirmFooterProps {
  /** footer尺寸 按钮尺寸 */
  size?: sizeMap;
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
})

const FbmConfirmFooter: React.FC<FbmConfirmFooterProps> = React.forwardRef((props, ref) => {
  const {
    size,
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

  const closeButtonProps = {
    size,
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

  const okButtonProps = {
    loading,
    size,
    disabled: okDisabled,
    onClick: handleOk,
    ...okProps
  }

  console.log(okProps)

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
  size: 'medium',
  okDisabled: false,
  okText: '确定',
  okProps: {},
  isCloseButton: true,
  closeProps: {},
  closeText: '取消'
}

export default FbmConfirmFooter