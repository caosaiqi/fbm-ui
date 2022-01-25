import React from 'react';
import styled from '@mui/material/styles/styled'

import Popover from '../Popover'
import Box from '../Box'
import Typography from '../Typography'
import ConfirmFooter, { FbmConfirmFooterProps } from '../ConfirmFooter'
import { isFunction } from '../../utils'

export interface FbmPopoverProps extends FbmConfirmFooterProps {
  /** 弹框标题 */
  title?: React.ReactNode;
  /** 弹框内容 */
  content?: React.ReactNode;
  /** 弹框显示icon */
  icon?: React.ReactNode;
  /** 弹框target */
  children?: React.ReactNode;
}

const PopContent = styled(Box)({})
const PopTitle = styled(Typography)({
  fontSize: 16,
  paddingBottom: 12,
  color: '#000',
  fontWeight: 500,
})

const Popconfirm: React.FC<FbmPopoverProps> = ({
  title,
  content,
  children,
  onOk,
  onClose,
  ...popoverProps
}) => {

  const contentRender = (popover) => {
    const hanldeClose = async () => {
      if (isFunction(popover?.hanldeClose)) {
        popover.hanldeClose()
      }
      if(isFunction(onClose)) {
        onClose()
      }
    }

    return (
      <div>
        <PopTitle>
          {title}
        </PopTitle >
        <PopContent>
          {content}
        </PopContent>
        <ConfirmFooter
          onOk={onOk}
          onClose={hanldeClose}
        />
      </div>
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