import * as React from 'react';
import { CheckIcon, ErrorIcon, WarningIcon, InfoIcon } from '@avocadoui/icons';
import { Snackbar, SnackbarProps, Box, Slide } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'

import Typography from '../Typography'
import renderIntoBody from '../utils/renderIntoBody'
import { theme } from '../ThemeProvider'

export const componentName: string = 'Amessage'

type NoticeType = 'error' | 'warning' | 'success' | 'info'

interface CreateMessage {
  message?: string;
  onClose?: () => void;
  type?: NoticeType;
}

interface MessageProps extends SnackbarProps {
  type: NoticeType;
  onClose: () => void;
}

interface ItemProps {
  (message?: string, onClose?: () => void): void
}

export interface Messages {
  error: ItemProps;
  warning: ItemProps;
  success: ItemProps;
  info: ItemProps;
}

const icons = {
  'error': ErrorIcon,
  'warning': WarningIcon,
  'success': CheckIcon,
  'info': InfoIcon,
}

const Message = (props: MessageProps) => {
  const { autoHideDuration, type, message, onClose, open: defaultOpen } = props
  const [open, setOpen] = React.useState(defaultOpen)

  const t = setTimeout(() => {
    setOpen(false)
    if (onClose && typeof onClose === 'function') {
      onClose()
    }
    clearTimeout(t)
  }, autoHideDuration)

  const Row =  styled(Box)({
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    minWidth: 156,
    boxShadow: ' 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)',
    borderRadius: '4px',
  })

  const Icon = styled(icons[type])({
    color: theme.palette[type].main,
  })
  
  const Content = styled(Typography)({
    fontSize: 14,
    marginLeft: '14px',
  })

  return (
    <Snackbar {...props} open={open} >
      <Row>
        <Icon />
        <Content>{message}</Content>
      </Row>
    </Snackbar>
  )
}

Message.defaultProps = {
  open: true,
  type: 'info',
  TransitionComponent: Slide,
  autoHideDuration: 40000,
  direction: 'down',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
}

const createMessage = ({
  message,
  onClose,
  type,
}: CreateMessage) => {
  let div: any

  const doClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose()
    }
    div.delete(300)
  }

  div = renderIntoBody(
    <Message
      message={message}
      type={type}
      onClose={doClose}
    />,
  )
}

const messages: Messages = {
  error: (message, onClose) => {
    createMessage({
      message,
      onClose,
      type: 'error',
    })
  },

  warning: (message, onClose) => {
    createMessage({
      message,
      onClose,
      type: 'warning',
    })
  },

  success: (message, onClose) => {
    createMessage({
      message,
      onClose,
      type: 'success',
    })
  },

  info: (message, onClose) => {
    createMessage({
      message,
      onClose,
      type: 'info',
    })
  },
}

export default messages
