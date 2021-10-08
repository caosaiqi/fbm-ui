import * as React from 'react';
import { Alert, AlertProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

import Aicon from '../Icon'

const componentName: string = 'Aalert'

type AlertType = 'error' | 'warning' | 'success' | 'info'

export interface AalertProps extends AlertProps {
  type?: AlertType;
  children?: React.ReactNode
}


const AlertRoot: React.FC<AalertProps> = styled(Alert, {
  name: 'Aalert',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { type } = props
    return [styles.root, styles[type]]
  },
})(() => ({}))


const Aalert: React.FC<AalertProps> = (inProps) => {
  const {
    type,
    children,
    icon,
    color: componentColor,
    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName })

  const Icon: React.ReactNode = () => {
    if (icon === null) return null

    if (icon === undefined) {
      const typeIcons = {
        success: 'CheckIcon',
        error: 'ErrorIcon',
        warning: 'WarningIcon',
        info: 'InfoIcon',
      }
      if (typeIcons[type]) {
        const name = typeIcons[type]
        return <Aicon name={name} />
      }
    }

    if (typeof icon === 'string') {
      return <Aicon name={icon} />
    }

    return icon
  }

  const color = componentColor || type

  return (
    <AlertRoot color={color} icon={<Icon />} type={type} {...otherProps}>
      {children}
    </AlertRoot>
  )
}

export default Aalert
