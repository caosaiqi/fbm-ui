import * as React from 'react';
import { Avatar, AvatarProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Box from '../Box'
import { MaleIcon } from '../icons'

type SizeType = 'small' | 'middle' | 'large';
export interface FbmAvatarPropos extends AvatarProps {
  /** 尺寸 */
  size?: SizeType | string | number;
  /** 是否为禁用状态 */
  disabled?: boolean,
  /** 性别 */
  sex?: number | string
}

const BoxRoot = styled(Box)({
  display: 'inline-block',
  borderRadius: '50%',
  position: 'relative',
})

const SexRoot = styled(Box)({
  position: 'absolute',
  width: 14,
  height: 14,
  right: 0,
  bottom: '-0px',
  background: 'rgb(75, 132, 255)',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '50%',
  border: '1px solid #fff'
})

const SexIconRoot = styled(MaleIcon)({
  fontSize: 12,
  color: '#ffffff'
})
 

const AvatarRoot: React.FC<FbmAvatarPropos> = styled(Avatar)
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

const FbmAvatar: React.FC<FbmAvatarPropos> = ({
  size,
  disabled,
  sex,
  ...otherProps
}) => {

  const avatarProps = {
    size: formatSize(size),
    ...otherProps
  }

  const SexRender = () => {
    if (!sex && sex !== 0) return null

    return (
      <SexRoot>
        <SexIconRoot />
      </SexRoot>
    )
  }

  return (
    <BoxRoot disabled={disabled}>
      <AvatarRoot  {...avatarProps} />
      <SexRender />
    </BoxRoot>
  )
}

FbmAvatar.defaultProps = {
  size: 'middle',
  disabled: false,
}

export default FbmAvatar
