import * as React from 'react';

import Dialog, { FbmDialogProps } from '../Dialog'
import renderIntoBody from '../../utils/renderIntoBody'
import ThemeProvider from '../ThemeProvider'
import Typography from '../Typography'

export interface FbmConfirmProps extends FbmDialogProps{
  content?: string | React.ReactNode;
}

const fbmConfirm = (props: FbmConfirmProps) => {
  const {
    content,
    onClose,
    open: defaultOpen = true,
  } = props

  const Content = () => {
    let renderContent = null
    if (!content) return renderContent
    if (typeof content === 'string') {
      renderContent = (
        <Typography color='secondary'>
          {content}
        </Typography>
      )
    } else {
      renderContent = content
    }
    return renderContent
  }

  let confirmDiv: any
  const Modal = () => {
    const [open, setOpen] = React.useState(defaultOpen)
    const handleClose = () => {
      setOpen(false)
      if (onClose && typeof onClose === 'function') {
        onClose()
      }
      confirmDiv.delete()
    }
    const dialogProps = {
      open,
      BackdropProps: {
        open: false,
      },
      onClose: handleClose,
      ...props
    }

    return (
      <ThemeProvider>
        <Dialog {...dialogProps}>
          <Content />
        </Dialog>
      </ThemeProvider>
    )
  }
  confirmDiv = renderIntoBody(<Modal />)
}


export default fbmConfirm