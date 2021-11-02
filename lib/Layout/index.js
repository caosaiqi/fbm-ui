import * as React from 'react';
import ThemeProvider from '../ThemeProvider';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
var InternalLayout = function (_a) {
    var children = _a.children;
    return (React.createElement(ThemeProvider, { theme: undefined }, children));
};
var Layout = InternalLayout;
Layout.Header = Header;
Layout.Content = Content;
Layout.Menu = Menu;
export default Layout;
