import * as React from 'react';
import { Box } from '@material-ui/core'

import Logo, { LogoPropos } from '../Logo'
import styles from './styles'

export interface HeaderPrpos {
    children: React.ReactNode,
    logoProps?: LogoPropos
}

const Header: React.FC<HeaderPrpos> = ({
    children,
    logoProps,
}) => (
    <Box component='header' sx={styles.header}>
        <Logo {...logoProps} />
        {children}
    </Box>
)

export default Header
