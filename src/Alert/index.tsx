import * as React from 'react';
import { Alert, AlertProps } from '@mui/material'
import styled from '@mui/material/styles/styled'
import useThemeProps from '@mui/material/styles/useThemeProps'

import {
  CheckIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon
} from '../icons'

const componentName: string = 'Aalert'

type AlertType = 'error' | 'warning' | 'success' | 'info'

export interface AalertProps extends AlertProps {
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

const AlertRoot: React.FC<AalertProps> = styled(Alert, {
  name: 'Aalert',
  slot: 'Root',
})(({ theme, type }) => (
  {
    color: theme.palette.text.secondary,
    padding: '4px 16px',
    border: '1px solid',
    borderColor: theme.palette[type].main,
    backgroundColor: theme.palette[type].bgColor,
  }
))

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

const Aalert: React.FC<AalertProps> = (inProps) => {
  const {
    type,
    children,
    message,
    icon,
    color: componentColor,
    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName })

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

Aalert.defaultProps = {
  type: 'info'
}

export default Aalert
