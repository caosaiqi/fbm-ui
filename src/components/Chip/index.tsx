import React from 'react'
import styled from '@mui/material/styles/styled'
import { Chip, ChipProps } from '@mui/material'


const ChipRoot: React.FC<ChipProps> = styled(Chip)({
})

ChipRoot.defaultProps = {
  variant: 'outlined',
  size: 'small',
  // color: 'primary',
}

export default ChipRoot