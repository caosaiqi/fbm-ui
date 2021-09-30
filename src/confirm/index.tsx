import * as React from 'react';
import { Box } from '@material-ui/core'
import Dialog, { AuiDialogProps } from '../dialog'
import renderIntoBody from '../utils/renderIntoBody'
import ThemeProvider from '../theme-provider'
import Typography from '../typography'

export const componentName: string = 'Confirm'

export interface ConfirmProps extends AuiDialogProps {
  content?: string | React.ReactNode
}

const confirm = (props: ConfirmProps) => {
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

    return (
      <Box m='24px 0'>
        {renderContent}
      </Box>
    )
  }

  let confirmDiv: any
  const Modal = () => {
    const [open, setOpen] = React.useState(defaultOpen)

    const doClose = () => {
      setOpen(false)
      if (onClose && typeof onClose === 'string') {
        onClose()
      }
      confirmDiv.delete()
    }

    return (
      <ThemeProvider>
        <Dialog
          {...props}
          open={open}
          onClose={doClose}
          BackdropProps={{
            open: false,
          }}
        >
          <Content />
        </Dialog>
      </ThemeProvider>
    )
  }
  confirmDiv = renderIntoBody(<Modal />)
}

export default confirm