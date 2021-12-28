import React from 'react'
import styled from '@mui/material/styles/styled'
import { Box } from '@mui/material'

import Typography from '../Typography'

interface FbmEmptyProps {
  desc?: string;
  src?: string;
}


const EmptyRoot: React.FC = styled(Box)({
  textAlign: 'center'
})

const FbmEmpty: React.FC<FbmEmptyProps> = ({ desc, src }) => {
  return (
    <EmptyRoot>
      <Box src={src} component='img' sx={{ width: '150px' }} />
      <Typography color='secondary'>
        {desc}
      </Typography>
    </EmptyRoot>
  )
}

FbmEmpty.defaultProps = {
  desc: '',
  src: '//webcdn.fbmms.cn/web/saas/asset/image/CandidateInfoEmpty.png'
}

export default FbmEmpty