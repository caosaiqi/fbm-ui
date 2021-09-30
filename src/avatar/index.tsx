import * as React from 'react';
import { Avatar, AvatarProps } from '@material-ui/core'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

import getStyleOverrides from '../utils/getStyleOverrides'

const componentName: string = 'Avatar'

type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface AuiAvatarPropos extends AvatarProps {
  size?: SizeType | string;
  disabled?: boolean,
}

const AuiAvatar: React.FC<AuiAvatarPropos> = (inProps) => {
  const props = useThemeProps({ props: inProps, name: componentName });
  const overrides = getStyleOverrides(componentName)

  const {
    size,
    sx,
    disabled,
    ...otherProps
  } = props

  const style = {
    ...overrides[size],
    ...(disabled && overrides.disabled),
    ...sx,
  }

  return (<Avatar sx={style}  {...otherProps} />)
}

export default AuiAvatar
