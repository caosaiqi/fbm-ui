import * as React from 'react';
import ThemeProvider, { ThemeProviderProps } from '@material-ui/core/styles/ThemeProvider';
import createTheme from '@material-ui/core/styles/createTheme';

import defaultTheme, { layout } from './theme'

export interface AuiThemeProviderProps extends ThemeProviderProps { }

const AuiThemeProvider: React.FC<AuiThemeProviderProps> = ({ children, theme }) => (
    <ThemeProvider theme={createTheme({ ...defaultTheme, ...theme }, { layout  })}>
        {children}
    </ThemeProvider>
)

export default AuiThemeProvider
