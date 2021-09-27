import * as React from 'react';
import { Box } from '@material-ui/core'

import styles from './styles'

export interface MaskProps {
  zIndex?: number
}

const Mask: React.FC<MaskProps> = ({ zIndex, ...otherProps }) => <Box sx={styles} zIndex={zIndex} {...otherProps} />

Mask.defaultProps = {
  zIndex: 2,
}

export default Mask
