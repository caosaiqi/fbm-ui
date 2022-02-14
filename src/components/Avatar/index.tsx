import * as React from 'react';
import { Avatar, AvatarProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

import Box from '../Box'
import { MaleIcon, FemaleIIcon } from '../icons'

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
  backgroundColor: '#fff',
})

const SexRoot: React.FC<{
  sex: FbmAvatarPropos['sex']
}> = styled(Box)(({ sex }) => {
  const bgColor = {
    1: 'rgb(75, 132, 255)',
    2: 'rgb(255, 79, 123)'
  }
  return {
    position: 'absolute',
    width: 14,
    height: 14,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',
    border: '1px solid #fff',
    background: bgColor[sex],
  }
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
    const icons = {
      1: MaleIcon,
      2: FemaleIIcon
    }

    if (!sex || !icons[sex]) return null

    const Icon = styled(icons[sex])({
      fontSize: 12,
      color: '#ffffff'
    })
    return (
      <SexRoot sex={sex}>
        <Icon />
      </SexRoot>
    )
  }

  const BoxMaskProps ={
    sx: {
      borderRadius: '50%'
    }
  }

  return (
    <BoxRoot disabled={disabled} MaskProps={BoxMaskProps}>
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
