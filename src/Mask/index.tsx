import * as React from 'react';
import { Box } from '@mui/material'
import styled from '@mui/material/styles/styled'

type ColorMap = 'white' | 'dark'
export interface MaskProps { 
  color?: ColorMap | string
}

const MaskRoot: React.FC<MaskProps> = styled(Box)(({ theme, color }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 2,
  backgroundColor: theme.palette.mask[color] || color,
}))

const Amask: React.FC<MaskProps> = ({
  children,
  ...otherProps
}) => (
  <MaskRoot {...otherProps}>
    {children}
  </MaskRoot>
)

Amask.defaultProps = {
  color: 'white',
}

export default Amask
