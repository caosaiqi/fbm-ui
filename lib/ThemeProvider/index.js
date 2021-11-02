import * as React from 'react';
import ThemeProvider from '@material-ui/core/styles/ThemeProvider';
import createTheme from '@material-ui/core/styles/createTheme';
import themeVars from './src';
export var theme = createTheme(themeVars);
var AuiThemeProvider = function (_a) {
    var children = _a.children;
    return (React.createElement(ThemeProvider, { theme: theme }, children));
};
export default AuiThemeProvider;
