import * as React from 'react';
import { CircularProgress, CircularProgressProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

export const componentName: string = 'Aloading'

type sizeType = 'large' | 'small'
export interface AloadingProps extends CircularProgressProps {
  size?: sizeType | number
}

const LoadingRoot: React.FC<AloadingProps> = styled(CircularProgress, {
  name: 'Aloading',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({}))

const ACircularProgress: React.FC<AloadingProps> = (inProps) => {
  const {
    size,
    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName });

  const sizeType = {
    small: 16,
    large: 44,
  }
  const componentSize = sizeType[size] || size

  return <LoadingRoot {...otherProps} size={componentSize} />
}

export default ACircularProgress
