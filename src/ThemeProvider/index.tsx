import * as React from 'react';

import ThemeProvider, { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import createTheme, { Theme } from '@mui/material/styles/createTheme'

import palette from './src/palette'
import typography from './src/typography'
import transitions from './src/transitions'
import shadows from './src/shadows'
import components from './src/components'
import custom from './src/custom'

interface BgColor {
  error: string;
  warning: string;
  success: string;
  info: string;
}

interface Mask {
  dark: string;
  white: string;
}

interface Custom {
  bgColor: BgColor;
  mask: Mask
}
export interface FbmThemeOptions extends Theme {
  custom: Custom
}

export const theme = createTheme(
  {
    palette,
    components,
    typography,
    transitions,
    shadows: (shadows as any),
  },
  {
    custom
  }
)

const FbmThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default FbmThemeProvider
