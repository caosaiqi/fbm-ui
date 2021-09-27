import * as React from 'react';
import { Box } from '@material-ui/core'

// import Logo, { LogoPropos } from 'avocado-ui'
import styles from './styles'

export interface HeaderPrpos {
  children?: React.ReactNode,
  // logoProps?: LogoPropos
}

const Header: React.FC<HeaderPrpos> = ({
  children,
  // logoProps,
}) => (
  <Box component='header' sx={styles.header}>
    {/* <Logo {...logoProps} /> */}
     <h1>鳄梨科技</h1>
    {children}
  </Box>
)

export default Header
