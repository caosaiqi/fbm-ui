import * as React from 'react';
import { Box } from '@mui/material'

export interface ImagePropos {
  src?: string
  alt?: string,
  width?: number,
  height?: number,
}

const Image: React.FC<ImagePropos> = ({ src, alt, width }) => (
  <Box width={width} component="img" src={src} alt={alt} />
)

export default Image
