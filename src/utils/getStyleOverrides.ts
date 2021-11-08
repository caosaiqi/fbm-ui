import { theme as customTheme } from '../components/ThemeProvider'

const getStyleOverrides = (name: string, theme = customTheme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }
  return undefined;
};

export default getStyleOverrides