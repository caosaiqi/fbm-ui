import React from 'react';
import styled from '@mui/material/styles/styled'

import Avatar from '../Avatar'
import Box from '../Box'
import Typography from '../Typography'

type AgeMap = 0 | 1

export interface FbmUserInfoProps {
  sex?: AgeMap;
  avatar?: string;
  name?: string;
  desc?: string;
}


const FbmUserInfoRoot = styled(Box)({
  display: 'flex',
  alignItems: 'center'
})


const FbmUserInfo: React.FC<FbmUserInfoProps> = ({
  avatar,
  sex,
  name,
  desc
}) => {
  return (
    <FbmUserInfoRoot>
      <Avatar src={avatar} sex={sex} />
      <Box sx={{ ml: '5px' }}>
        <Typography variant='body2' sx={{ mb: '4px' }}>{name}</Typography>
        <Typography variant='caption' color='secondary'>{desc}</Typography>
      </Box>
    </FbmUserInfoRoot>
  )
}



export default FbmUserInfo