import * as React from 'react';
import { Dialog, DialogProps, Box, DialogActions, Button, ButtonProps, Slide } from '@material-ui/core'
import useThemeProps from '@material-ui/core/styles/useThemeProps'
import styled from '@material-ui/core/styles/styled'
import { CloseIcon } from '@avocadoui/icons'

import ListRow from '../ListRow'

export const componentName: string = 'ADialog'

type dialogType = 'error' | 'warning' | 'success' | 'info';

export interface AdialogProps extends DialogProps {
  /** ADialog类型 可选 */
  type?: dialogType;
  /** 标题 */
  title?: string;
  /** 传null则不显示， 传vnode则自定义底部内容， 不传则展示默认footer */
  footer?: React.ReactNode | null
  /** footer 确认按钮文案 默认为“好的”' */
  okText?: string;
  /** footer 取消按钮文案 默认为“取消”' */
  closeText?: string;
  /** 是否显示dialog又上角“x” */
  isShowHeaderClose?: boolean;
  /** 是否显示取消按钮 */
  isShowFooterClose?: boolean;
  /** footer 取消按钮props */
  okProps?: ButtonProps;
  /** footer 取消按钮props */
  closeProps?: ButtonProps;
  /** footer 确定按钮click事件 */
  onOk?: () => void | Promise<void>;
  /** footer 取消按钮事件 */
  onClose?: () => void;
}

const Content = styled(Box, {
  name: 'DialogContent',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({}))

const AuiDialog: React.FC<AdialogProps> = (inProps) => {
  const {
    type,
    title,
    children,
    footer,
    okText,
    closeText,
    isShowHeaderClose,
    isShowFooterClose,
    closeProps,
    okProps,
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

    if (isShowHeaderClose) {
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
          isShowFooterClose && (
            <Button {...closeProps} onClick={doClose}>
              {closeText}
            </Button>
          )
        }
        <Button {...okProps} onClick={doOk} color={type}>
          {okText}
        </Button>
      </DialogActions>
    )
  }

    
  return (
    <Dialog  TransitionComponent={Slide} {...otherProps}>
      <Content>
        <Title />
        {children}
        <Footer />
      </Content>
    </Dialog>
  )
}

export default AuiDialog