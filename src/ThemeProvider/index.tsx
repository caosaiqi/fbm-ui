import * as React from 'react';

import ThemeProvider, { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme'
import themeVars from './src'

export const theme = createTheme(themeVars)

const AuiThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default AuiThemeProvider
