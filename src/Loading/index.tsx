import * as React from 'react';
import { CircularProgress, CircularProgressProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

export const componentName: string = 'Aloading'

type SizeType = 'large' | 'small'
type ColorType = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit'
export interface AloadingProps {
  /** 尺寸 */
  size?: SizeType | number
  /** 颜色 */
  color?: ColorType | string,
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

  return <LoadingRoot size={componentSize} {...otherProps} />
}

ACircularProgress.defaultProps={
  color: 'primary',
  size: 'large',
}

export default ACircularProgress
