import * as React from 'react';
import { Box } from '@material-ui/core'

import styles from './styles'

export interface ContentPrpos {
  children: React.ReactNode,
}

const Content: React.FC<ContentPrpos> = ({ children }) => (
  <Box sx={styles.content}>
      {children}
  </Box>
)

export default Content
