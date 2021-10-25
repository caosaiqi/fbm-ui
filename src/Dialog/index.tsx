import * as React from 'react';
import { Dialog, DialogProps, Box, DialogActions, Button, ButtonProps, Slide, IconButton, ModalProps } from '@material-ui/core'
import useThemeProps from '@material-ui/core/styles/useThemeProps'
import styled from '@material-ui/core/styles/styled'
import { CloseIcon } from '@avocadoui/icons'

import Atypography from '../Typography'
import Abox from '../Box'

export const componentName: string = 'ADialog'

interface HeaderProps {
  /** 标题 */
  title?: string;
  /** 是否显示dialog又上角“x” */
  isShowClose?: boolean;
  /** 传null则不显示， 传vnode则自定义底部内容， 不传则展示默认footer */
  header?: React.ReactElement;
  /** 关闭弹框事件 */
  onClose?: ModalProps['onClose'];
}

export interface FooterProps {
  /** 传null则不显示， 传vnode则自定义底部内容， 不传则展示默认footer */
  footer?: React.ReactElement;
  /** footer 确认按钮文案 默认为“好的”' */
  okText?: string;
  /** footer 取消按钮文案 默认为“取消”' */
  closeText?: string;
  /** 是否显示取消按钮 */
  isShowCloseBtn?: boolean;
  /** footer 取消按钮props */
  okProps?: ButtonProps;
  /** footer 取消按钮props */
  closeProps?: ButtonProps;
  // /** footer 确定按钮click事件 */
  onOk?: (event: any) => void | Promise<void>;
  /** 关闭弹框事件 */
  onClose?: ModalProps['onClose'];

}

export interface ContentProps {
  /** 弹框宽度 */
  width?: number;
  /** 是否显示header */
  isNullHeader: boolean;
  /** 是否显示footer */
  isNullFooter: boolean;
}

export interface AdialogProps extends DialogProps, HeaderProps, FooterProps {
  /** 弹框宽度 */
  width?: number;
}

const Content: React.FC<ContentProps> = styled(Abox)(({
  width,
  isNullHeader,
  isNullFooter,
}) => ({
  width: width || 360,
  padding: 16,
  ...(isNullHeader && {
    paddingTop: 0,
  }),
  ...(isNullFooter && {
    paddingBottom: 0,
  }),
}))

const Header: React.FC<HeaderProps> = (props) => {
  const { title, isShowClose, header, onClose } = props
  if (header === null) return null

  if (typeof (header) === 'function') {
    const CustomHeader: React.FC<HeaderProps> = header
    return <CustomHeader {...props} />
  }

  if (!title && !isShowClose) return null

  const HeaderRow = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(!title && {
      justifyContent: 'flex-end',
    }),
  })

  const Title = () => {
    if (!title) return null
    return (
      <div style={{ flex: 1 }}>
        <Atypography weight='medium'>
          {title}
        </Atypography>
      </div>
    )
  }

  const CloseBtn = () => {
    if (!isShowClose) return null
    return (
      <IconButton
        onClick={(e) => onClose(e, 'backdropClick')}
        style={{ padding: 0 }}>
        <CloseIcon />
      </IconButton>
    )
  }

  return (
    <HeaderRow >
      <Title />
      <CloseBtn />
    </HeaderRow>
  )
}


const Footer: React.FC<FooterProps> = (props) => {
  const {
    footer,
    okText,
    closeText,
    isShowCloseBtn,
    closeProps,
    okProps,
    onClose,
    onOk,
  } = props

  if (footer === null) return null

  if (typeof (footer) === 'function') {
    const CustomFooter: React.FC<FooterProps> = footer
    return <CustomFooter {...props} />
  }

  const CloseButton = () => {
    if (!isShowCloseBtn) return null
    return (
      <Button {...closeProps} onClick={(event) => onClose(event, 'backdropClick')}>
        {closeText}
      </Button>
    )
  }

  return (
    <DialogActions sx={{ padding: 0 }}>
      <CloseButton />
      <Button {...okProps} onClick={(e) => onOk(e)}>
        {okText}
      </Button>
    </DialogActions>
  )
}


const AuiDialog: React.FC<AdialogProps> = (inProps) => {
  const {
    width,

    title,
    header,
    isShowClose,

    children,
    footer,
    okText,
    closeText,
    isShowCloseBtn,
    closeProps,
    okProps,

    onClose,
    onOk,

    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName })

  const doClose = (event, reason) => {
    if (onClose && typeof onClose === 'function') {
      onClose(event, reason)
    }
  }

  const doOk = async (event) => {
    if (onOk && typeof onOk === 'function') {
      const f = await onOk(event)
      if (f === undefined) {
        doClose(event, 'backdropClick')
      }
    }
  }


  const contentProps = {
    width,
    isNullHeader: header === null,
    isNullFooter: footer === null,
  }

  const HeaderProps = {
    title,
    header,
    isShowClose,
    onClose: doClose,
  }

  const footerProps = {
    footer,
    okText,
    closeText,
    isShowCloseBtn,
    closeProps,
    okProps,
    onClose: doClose,
    onOk: doOk,
  }

  return (
    <Dialog TransitionComponent={Slide} {...otherProps}>
      <Content {...contentProps}>
        <Header {...HeaderProps} />
        {children}
        <Footer {...footerProps} />
      </Content>
    </Dialog>
  )
}

AuiDialog.defaultProps = {
  isShowClose: true,
  isShowCloseBtn: true,
  closeText: '取消',
  okText: '好的',
  closeProps: {
    variant: 'text',
    color: 'secondary',
  },
  okProps: {
    variant: 'contained',
  },
}
export default AuiDialog