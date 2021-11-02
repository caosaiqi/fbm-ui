import * as React from 'react';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
interface InternalLayoutProps {
    children: React.ReactNode;
}
export interface LayoutProps extends React.FC<InternalLayoutProps> {
    Header: typeof Header;
    Content: typeof Content;
    Menu: typeof Menu;
}
declare const Layout: LayoutProps;
export default Layout;
