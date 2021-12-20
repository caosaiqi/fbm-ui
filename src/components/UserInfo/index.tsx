import React from 'react';
import styled from '@mui/material/styles/styled'
import { ChipProps } from '@mui/material'

import Avatar from '../Avatar'
import Box from '../Box'
import Typography from '../Typography'
import Chip from '../Chip'

type AgeMap = 1 | 2
type ChipsProps = {
  chips?: ChipProps[]
}

export interface FbmUserInfoProps {
  /** 性别 1:男 2:女 */
  sex?: AgeMap;
  /** 头像 */
  avatar?: string;
  /** 名称 */
  name?: string;
  /** 个人信息 */
  desc?: string;
  /** 标签 */
  chips?: ChipsProps['chips']
}

const FbmUserInfoRoot = styled(Box)({
  display: 'flex',
})

const InfoRoot = styled(Box)({
  marginLeft: 5,
  position: 'relative',
  top: '-5px',
})

const NameText = styled(Typography)({
  height: 22,
  marginBottom: '4px',
})

const DescTetx = styled(Typography)({
  height: 22,
  marginBottom: '4px',
  fontSize: 14,
  color: 'rgba(0, 0, 0, 0.56)',
})

const Chips: React.FC<ChipsProps> = ({
  chips
}) => {
  if (!chips || (chips && chips.length === 0)) return null

  const Items = chips.map((chip, index) => (
    <Chip
      key={index}
      color='primary'
      sx={{ mr: '8px' }}
      {...chip}
    />
  ))

  return (
    <Box sx={{ mt: '8px' }}>
      {Items}
    </Box>
  )
}

const FbmUserInfo: React.FC<FbmUserInfoProps> = ({
  avatar,
  sex,
  name,
  desc,
  chips
}) => {

  const avatarProps = {
    avatar,
    sex,
  }

  return (
    <FbmUserInfoRoot>
      <Box>
        <Avatar
          {...avatarProps}
        />
      </Box>
      <InfoRoot>
        <NameText >{name}</NameText>
        <DescTetx>{desc}</DescTetx>
        <Chips chips={chips} />
      </InfoRoot>
    </FbmUserInfoRoot>
  )
}


FbmUserInfo.defaultProps = {
  name: '',
  chips: []
}


export default React.memo(FbmUserInfo)