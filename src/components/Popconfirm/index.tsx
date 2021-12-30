import React from 'react';
import styled from '@mui/material/styles/styled'

import Popover from '../Popover'
import Box from '../Box'
import ConfirmFooter, { FbmConfirmFooterProps } from '../ConfirmFooter'
import Typography from '../Typography'
import { InfoIcon } from '../icons'

interface FbmPopoverProps extends FbmConfirmFooterProps {
  content?: React.ReactNode;
  message?: React.ReactNode;
  icon?: React.ReactNode;
}

interface PopcContentProps {
  onOk: FbmConfirmFooterProps['onOk'];
  onClose: FbmConfirmFooterProps['onClose'];
  content: FbmPopoverProps['content'];
  message?: FbmPopoverProps['message'];
}

interface PopmessageProps {
  icon?: React.ReactNode;
}

const ContentRoot = styled(Box)({
  padding: '12px 16px'
})

const MessageRoot = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 28,
  minWidth: 170,
})

const Message: React.FC<PopmessageProps> = ({
  icon: iconProp,
  children,
}) => {
  let icon = iconProp
  if (!icon) {
    icon = InfoIcon
  }
  return (
    <MessageRoot>
      <Box>
        {icon}
      </Box>
      <Typography>
        {children}
      </Typography>
    </MessageRoot>
  )
}

const Content: React.FC<PopcContentProps> = ({
  onOk,
  onClose,
  message,
  children: childrenProp,
}) => {
  let children = childrenProp
  if (!children) {
    children = (
      <Message>
        {message}
      </Message>
    )
  }
  return (
    <ContentRoot>
      {children}
      <ConfirmFooter
        onOk={onOk}
        onClose={onClose}
      />
    </ContentRoot>
  )
}

const Popconfirm: React.FC<FbmPopoverProps> = ({
  onOk,
  content,
  children,
  message,
  ...otherProps
}) => {
  const popoverContent = (popoverProps) => {
    const props = {
      onOk,
      message,
      ...popoverProps,
    }
    return (
      <Content {...props}>
        {content}
      </Content>
    )
  }
  return (
    <Popover
      content={popoverContent}
      {...otherProps}
    >
      {children}
    </Popover>
  )
}


Popconfirm.defaultProps = {
  onOk: () => { }
}

export default Popconfirm