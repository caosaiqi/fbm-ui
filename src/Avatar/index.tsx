import * as React from 'react';
import { Avatar, AvatarProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

export const componentName: string = 'Aavatar'

type SizeType = 'small' | 'middle' | 'large' | undefined;
export interface AavatarPropos extends AvatarProps {
  size?: SizeType | string;
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
