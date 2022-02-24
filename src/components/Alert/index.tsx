import * as React from 'react';
import { Alert, AlertProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

import { FbmThemeOptions } from '../ThemeProvider'
import {
  CheckIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon
} from '../icons'

type AlertType = 'error' | 'warning' | 'success' | 'info'

export interface FbmAlertProps extends AlertProps {
  /** Alert类型 可选 默认为info */
  type?: AlertType;
  /** Alert显示内容 */
  children?: React.ReactNode,
  /** 提示文案 */
  message?: React.ReactNode,
}

interface IconProps {
  icon: React.ReactNode;
  type: AlertType
}

const AlertRoot: React.FC<FbmAlertProps> = styled(Alert, {
  name: 'Alert',
  slot: 'Root',
})(({ theme, type }) => {
  return {
    color: theme.palette.text.secondary,
    padding: '4px 16px',
    border: '1px solid',
    borderColor: theme.palette[type].main,
    backgroundColor: (theme as FbmThemeOptions).custom?.bgColor[type],
  }
})

const Icon: React.FC<IconProps> = ({ icon, type }) => {
  if (icon === null) return null
  if (icon === undefined) {
    const typeIcons = {
      success: <CheckIcon />,
      error: <ErrorIcon />,
      warning: <WarningIcon />,
      info: <InfoIcon />,
    }
    if (typeIcons[type]) {
      return typeIcons[type]
    }
  }

  return <> {icon} </>
}

const FbmAlert: React.FC<FbmAlertProps> = ({
  type,
  children,
  message,
  icon,
  color: componentColor,
  ...otherProps
}) => {
  const color = componentColor || type
  const AlertProps = {
    type,
    color,
    icon: <Icon icon={icon} type={type} />,
    ...otherProps
  }

  return (
    <AlertRoot {...AlertProps}>
      {message || children}
    </AlertRoot>
  )
}

FbmAlert.defaultProps = {
  type: 'info',
}

export default FbmAlert
