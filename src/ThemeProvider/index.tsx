import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme'

export interface MuiThemeProviderPrpos {
    children: React.ReactNode,
}

const AuiThemeProvider: React.FC<MuiThemeProviderPrpos> = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)

export default AuiThemeProvider
