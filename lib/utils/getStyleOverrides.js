import { theme as customTheme } from '../ThemeProvider';
var getStyleOverrides = function (name, theme) {
    if (theme === void 0) { theme = customTheme; }
    if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
        return theme.components[name].styleOverrides;
    }
    return undefined;
};
export default getStyleOverrides;
