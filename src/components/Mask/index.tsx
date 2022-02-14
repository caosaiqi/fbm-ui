import * as React from 'react';
import { Box, BoxProps } from '@mui/material'
import styled from '@mui/material/styles/styled'

import { FbmThemeOptions } from '../ThemeProvider'

type ColorMap = 'white' | 'dark'
export interface FbmMaskProps extends BoxProps { 
  color?: ColorMap | string
}

const MaskRoot: React.FC<FbmMaskProps> = styled(Box)(({ theme, color }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 2,
  backgroundColor:  (theme as FbmThemeOptions).custom.mask[color] || color,
}))

const FbmMask: React.FC<FbmMaskProps> = ({
  children,
  ...otherProps
}) => (
  <MaskRoot {...otherProps}>
    {children}
  </MaskRoot>
)

FbmMask.defaultProps = {
  color: 'white',
}

export default FbmMask
