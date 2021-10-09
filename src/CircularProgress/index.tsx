import * as React from 'react';
import { CircularProgress, CircularProgressProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

export const componentName: string = 'ACircularProgress'

type AlertType = 'error' | 'warning' | 'success' | 'info'

export interface ACircularProgressProps extends CircularProgressProps {
  type?: AlertType;
  children?: React.ReactNode
}


const CircularProgressRoot: React.FC = styled(CircularProgress, {
  name: 'ACircularProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { type } = props
    return [styles.root, styles[type]]
  },
})(() => ({}))


const ACircularProgress: React.FC<ACircularProgressProps> = (inProps) => (
    <CircularProgressRoot />
)

export default ACircularProgress
