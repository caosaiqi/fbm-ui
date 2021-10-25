import * as React from 'react';
import { Avatar, AvatarProps } from '@material-ui/core'
import styled from '@material-ui/core/styles/styled'
import useThemeProps from '@material-ui/core/styles/useThemeProps'

import Box from '../Box'

export const componentName: string = 'Aavatar'

type SizeType = 'small' | 'middle' | 'large';
export interface AavatarPropos extends AvatarProps {
  /** 尺寸 */
  size?: SizeType | string;
  /** 是否为禁用状态 */
  disabled?: boolean,
}

const BoxRoot = styled(Box)({
  display: 'inline-block',
  borderRadius: '50%',
}) 

const AvatarRoot: React.FC<AavatarPropos> = styled(Avatar, {
  name: 'Aavatar',
  slot: 'Root',
  overridesResolver: ({ size }, styles) => [
      styles.root,
      styles[size],
    ],
})(({ size }) => ({
  ...(size && typeof size === 'number') && {
    width: size,
    height: size,
  },
}))


const Aavatar: React.FC<AavatarPropos> = (inProps) => {
  const {
    size,
    disabled,
    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName });

  return (
    <BoxRoot disabled={disabled}>
      <AvatarRoot size={size}  {...otherProps} />
    </BoxRoot>
  )
}

Aavatar.defaultProps = {
  size: 'middle',
  disabled: false,
}

export default Aavatar
