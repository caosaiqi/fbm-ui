import React from 'react';
import styled from '@mui/material/styles/styled'

import Popover, { FbmPopoverProps } from '../Popover'
import Box from '../Box'
import Typography from '../Typography'
import ConfirmFooter, { FbmConfirmFooterProps } from '../ConfirmFooter'
import { isFunction } from '../../utils'

export interface FbmPopconfirmProps extends FbmConfirmFooterProps {
  /** 弹框标题 */
  title?: React.ReactNode;
  /** 弹框内容 */
  content?: React.ReactNode;
  /** 弹框显示icon */
  icon?: React.ReactNode;
  /** 弹框target */
  children: FbmPopoverProps['children'];
  /** 是否显示弹框 */
  open?: FbmPopoverProps['open'];
  /** 是否禁用弹框 */
  disabled?: FbmPopoverProps['disabled'];
  /** 是否需要三角▶️ */
  arrow?: FbmPopoverProps['arrow'];
  /** 触发行为 */
  trigger?: FbmPopoverProps['trigger'];
  /** 弹框位置 */
  placement?: FbmPopoverProps['placement'];
}

interface PopTitleProps {
  children?: React.ReactNode;
}

const PopContent = styled(Box)({
  padding: '0 16px',
})

const PopTitle: React.FC<PopTitleProps> = styled((props) => {
  const { children } = (props as PopTitleProps)
  if (children) {
    return <Typography {...props} />
  }
  return null
})({
  fontSize: 16,
  color: '#000',
  fontWeight: 500,
  height: '56px',
  alignItems: 'center',
  display: 'flex',
})

const Popconfirm: React.FC<FbmPopconfirmProps> = ({
  title,
  content,
  children,
  onOk,
  onClose,
  ...popoverProps
}) => {

  const contentRender = (popover) => {
    const handleClose = async () => {
      if (isFunction(popover?.handleClose)) {
        popover.handleClose()
      }
      if (isFunction(onClose)) {
        onClose()
      }
    }

    return (
      <PopContent>
        <PopTitle>
          {title}
        </PopTitle >
        {content}
        <ConfirmFooter
          onOk={onOk}
          onClose={handleClose}
        />
      </PopContent>
    )
  }

  return (
    <Popover
      content={contentRender}
      {...popoverProps}
    >
      {children}
    </Popover>
  )
}


Popconfirm.defaultProps = {
  onOk: () => { }
}

export default Popconfirm