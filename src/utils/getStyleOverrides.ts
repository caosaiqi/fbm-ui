import { theme as customTheme } from '../theme-provider'

const getStyleOverrides = (name: string, theme = customTheme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }
  return undefined;
};

export default getStyleOverrides