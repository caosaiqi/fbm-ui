import React from 'react';
import { Dialog, Fade, IconButton, DialogProps } from '@mui/material'
import useThemeProps from '@mui/material/styles/useThemeProps'
import styled from '@mui/material/styles/styled'

import { CloseIcon } from '../icons'
import Typography from '../Typography'

import Box from '../Box'
import ConfirmFooter, { FbmConfirmFooterProps } from '../ConfirmFooter'

export const componentName: string = 'ADialog'

interface HeaderProps {
  /** 标题 */
  title?: string;
  /** 是否显示dialog又上角“x” */
  isShowClose?: boolean;
  /** 传null则不显示， 传vnode则自定义底部内容， 不传则展示默认footer */
  header?: React.ReactElement | null;
  /** 关闭弹框事件 */
  onClose?: FbmConfirmFooterProps['onClose'];
}

export interface FooterProps extends FbmConfirmFooterProps {
  /** 传null则不显示， 传vnode则自定义底部内容， 不传则展示默认footer */
  footer?: React.ReactNode | null;
}

export interface FbmDialogProps extends HeaderProps, FooterProps {
  /** 是否显示弹框 */
  open?: boolean;
  /** 弹框宽度 */
  width?: number;
  /** ref */
  ref?: React.Ref<HTMLDivElement>,
  BackdropProps?: DialogProps['BackdropProps']
}

export interface RootProps {
  /** 弹框宽度 */
  width?: number;
  /** 是否显示header */
  isNullHeader: boolean;
  /** 是否显示footer */
  isNullFooter: boolean;
}

const DialogRoot: React.FC<RootProps> = styled(Box)(({
  width,
  isNullHeader,
  isNullFooter,
}) => ({
  width: width || 360,
  padding: '0 16px',
  ...(isNullHeader && {
    paddingTop: 0,
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
    height: '56px'
  })

  const Title = () => {
    if (!title) return null
    return (
      <div style={{ flex: 1 }}>
        <Typography color='black' weight='medium'>
          {title}
        </Typography>
      </div>
    )
  }

  const CloseBtn = () => {
    if (!isShowClose) return null
    return (
      <IconButton
        onClick={onClose}
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

const Content: React.FC = ({ children }) => (
  <Box>
    {children}
  </Box>
)

const Footer: React.FC<FooterProps> = (props) => {
  const {
    footer,
    ...confirmFooterProps
  } = props

  if (footer === null) return null

  if (typeof (footer) === 'function') return (
    <>
      {footer(props)}
    </>
  )

  return <ConfirmFooter  {...confirmFooterProps} />
}

const FbmDialog: React.FC<FbmDialogProps> = React.forwardRef((inProps, ref) => {
  const {
    width,
    title,
    header,
    isShowClose,
    children,
    footer,
    okText,
    closeText,
    isCloseButton,
    closeProps,
    okProps,
    onClose,
    onOk,
    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName })

  const rootProps = {
    width,
    isNullHeader: header === null,
    isNullFooter: footer === null,
  }

  const dialogProps = {
    open: false,
    TransitionComponent: Fade,
    ...otherProps
  }

  const HeaderProps = {
    title,
    header,
    isShowClose,
    onClose,
  }

  const footerProps = {
    footer,
    okText,
    closeText,
    isCloseButton,
    closeProps,
    onClose,
    onOk,
    okProps,
  }

  return (
    <Dialog {...dialogProps} ref={ref}>
      <DialogRoot {...rootProps}>
        <Header {...HeaderProps} />
        <Content>
          {children}
        </Content>
        <Footer {...footerProps} />
      </DialogRoot>
    </Dialog>
  )
})

FbmDialog.defaultProps = {
  isShowClose: false,
  isCloseButton: true,
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
export default FbmDialog