import * as React from 'react';
import { CheckIcon, ErrorIcon, WarningIcon, InfoIcon } from '@avocadoui/icons';
import { Snackbar, SnackbarProps, Box, Slide } from '@material-ui/core'

import Typography from '../typography'
import getStyleOverrides from '../utils/getStyleOverrides'
import renderIntoBody from '../utils/renderIntoBody'


export const componentName: string = 'Toast'

type noticeType = 'error' | 'warning' | 'success' | 'info'
interface CreateNotice {
  message?: string;
  onClose?: () => void;
  type?: noticeType;
}
interface NoticeProps extends SnackbarProps {
  type: noticeType;
  onClose: () => void;
}

interface ToastItem {
  (message?: string, onClose?: () => void): void
}

export interface ToastPropos {
  error: ToastItem;
  warning: ToastItem;
  success: ToastItem;
  info: ToastItem;
}

const icons = {
  'error': ErrorIcon,
  'warning': WarningIcon,
  'success': CheckIcon,
  'info': InfoIcon,
}

const Notice = (props: NoticeProps) => {
  const { autoHideDuration, type, message, onClose, open: defaultOpen } = props
  const [open, setOpen] = React.useState(defaultOpen)
  const overrides = getStyleOverrides(componentName)

  const t = setTimeout(() => {
    setOpen(false)
    if (onClose && typeof onClose === 'function') {
      onClose()
    }
    clearTimeout(t)
  }, autoHideDuration)


  const Icon = icons[type]

  const style = {
    ...overrides.root,
    ...overrides[type],
  }

  return (
    <Snackbar {...props} open={open} >
      <Box sx={style}>
        <Icon />
        <Typography fontSize={14} ml='14px' >{message}</Typography>
      </Box>
    </Snackbar>
  )
}

Notice.defaultProps = {
  open: true,
  type: 'info',
  TransitionComponent: Slide,
  autoHideDuration: 3000,
  direction: 'down',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
}

const createNotice = ({
  message,
  onClose,
  type,
}: CreateNotice) => {
  let div: any

  const doClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose()
    }
    div.delete(300)
  }

  div = renderIntoBody(
    <Notice
      message={message}
      type={type}
      onClose={doClose}
    />,
  )
}

const AuiToast: ToastPropos = {
  error: (message, onClose) => {
    createNotice({
      message,
      onClose,
      type: 'error',
    })
  },

  warning: (message, onClose) => {
    createNotice({
      message,
      onClose,
      type: 'warning',
    })
  },

  success: (message, onClose) => {
    createNotice({
      message,
      onClose,
      type: 'success',
    })
  },

  info: (message, onClose) => {
    createNotice({
      message,
      onClose,
      type: 'info',
    })
  },
}

export default AuiToast
