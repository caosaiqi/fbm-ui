import * as React from 'react';
import { Box } from '@material-ui/core'

export interface ContentPrpos {
  children: React.ReactNode,
}

const Content: React.FC<ContentPrpos> = ({ children }) => (
  <Box>
    {children}
  </Box>
)

export default Content
