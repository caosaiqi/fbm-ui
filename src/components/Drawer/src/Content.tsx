import React from 'react'
import styled from '@mui/material/styles/styled'

import Box from '../../Box'

const DrawerContent: React.FC = styled(Box)({
  height: 'calc(100vh - 80px)',
  overflowY: 'auto'
})

export default DrawerContent