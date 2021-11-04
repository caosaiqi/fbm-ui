import * as React from 'react';
import { Avatar, AvatarProps } from '@mui/material'
import styled from '@mui/material/styles/styled'
import useThemeProps from '@mui/material/styles/useThemeProps'

import Box from '../Box'

export const componentName: string = 'Aavatar'

type SizeType = 'small' | 'middle' | 'large';
export interface AavatarPropos extends AvatarProps {
  /** 尺寸 */
  size?: SizeType | string | number;
  /** 是否为禁用状态 */
  disabled?: boolean,
}

const BoxRoot = styled(Box)({
  display: 'inline-block',
  borderRadius: '50%',
})

const AvatarRoot: React.FC<AavatarPropos> = styled(Avatar)
(({ size }) => ({
  width: size,
  height: size
}))

const formatSize = (size) => {
  const defaultSizes = {
    small: 24,
    middle: 36,
    large: 48
  }
  return defaultSizes[size] || size
}

const Aavatar: React.FC<AavatarPropos> = ({
  size,
  disabled,
  ...otherProps
}) => {
  const avatarProps = {
    size: formatSize(size),
    ...otherProps
  }

  return (
    <BoxRoot disabled={disabled}>
      <AvatarRoot {...avatarProps}/>
    </BoxRoot>
  )
}

Aavatar.defaultProps = {
  size: 'middle',
  disabled: false,
}

export default Aavatar
