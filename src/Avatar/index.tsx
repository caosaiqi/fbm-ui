import * as React from 'react';
import { Avatar, AvatarProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

export const componentName: string = 'Aavatar'

type SizeType = 'small' | 'middle' | 'large' ;
export interface AavatarPropos extends AvatarProps {
  /** Aavatar 头像大小 可选 默认为middle */
  size?: SizeType | string;
  /** 是否为禁用状态 默认为false */
  disabled?: boolean,
}

const AvatarRoot: React.FC<AavatarPropos> = styled(Avatar, {
  name: 'Aavatar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { size, disabled } = props
    return [
      styles.root,
      styles[size],
      disabled && styles.disabled,
    ]
  },
})(() => ({}))

const Aavatar: React.FC<AavatarPropos> = (inProps) => {
  const {
    size,
    disabled,
    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName });

  return <AvatarRoot disabled={disabled} size={size}  {...otherProps} />
}

export default Aavatar
