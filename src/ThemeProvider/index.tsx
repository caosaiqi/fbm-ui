import * as React from 'react';
import ThemeProvider, { ThemeProviderProps } from '@material-ui/core/styles/ThemeProvider';
import createTheme from '@material-ui/core/styles/createTheme'
import themeVars from './src'

export interface AuiThemeProviderProps extends ThemeProviderProps { }

export const theme = createTheme(...themeVars)

const AuiThemeProvider: React.FC<AuiThemeProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default AuiThemeProvider
