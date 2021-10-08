import * as React from 'react';
import { Dialog, DialogProps, Box, DialogActions, Button, ButtonProps } from '@material-ui/core'
import useThemeProps from '@material-ui/core/styles/useThemeProps'
import styled from '@material-ui/core/styles/styled'
import {
  CloseIcon,
} from '@avocadoui/icons'

import ListRow from '../ListRow'

export const componentName: string = 'ADialog'

type dialogType = 'error' | 'warning' | 'success' | 'info';

export interface AuiDialogProps extends DialogProps {
  type?: dialogType;
  title?: string;
  footer?: React.ReactNode | boolean | null
  closeText?: string;
  okText?: string;
  isShowClose?: boolean;
  isShowCloseButton?: boolean;
  closeButtonProps?: ButtonProps;
  okButtonProps?: ButtonProps;
  onClose?: () => void;
  onOk?: () => void | Promise<void>;
}


const Content = styled(Box, {
  name: 'DialogContent',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({}))

const AuiDialog: React.FC<AuiDialogProps> = (inProps) => {
  const {
    type,
    title,
    children,
    footer,
    okText,
    closeText,
    isShowClose,
    isShowCloseButton,
    closeButtonProps,
    okButtonProps,
    onClose,
    onOk,
    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName })

  const doClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose()
    }
  }

  const doOk = async () => {
    if (onOk && typeof onOk === 'function') {
      const f = await onOk()
      if (f === undefined) {
        doClose()
      }
    }
  }

  const Title = () => {
    if (!title) return null
    const ListRowProps = {
      text: title,
    }

    if (isShowClose) {
      Object.assign(ListRowProps, {
        after: <CloseIcon />,
        afterButtonProps: {
          sx: {
            left: '16px',
            padding: 0,
          },
          onClick: doClose,
        },
      })
    }

    return <ListRow {...ListRowProps} />
  }

  const Footer = () => {
    if (footer === null) return null
    return (
      <DialogActions sx={{ padding: 0 }}>
        {
          isShowCloseButton && (
            <Button {...closeButtonProps} onClick={doClose}>
              {closeText}
            </Button>
          )
        }
        <Button {...okButtonProps} onClick={doOk} color={type}>
          {okText}
        </Button>
      </DialogActions>
    )
  }

  return (
    <Dialog {...otherProps}>
      <Content>
        <Title />
        {children}
        <Footer />
      </Content>
    </Dialog>
  )
}

export default AuiDialog