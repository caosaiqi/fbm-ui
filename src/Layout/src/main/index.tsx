import * as React from 'react';
import { Box } from '@material-ui/core'

export interface MainPrpos {
  children: React.ReactNode,
}


const Main: React.FC<MainPrpos> = ({ children }) => (
  <Box sx={{
    display: 'flex',
  }}>
    {children}
  </Box>
)

export default Main
