import * as React from 'react';

import ThemeProvider from '../ThemeProvider'
import Header from './Header'
import Menu from './Menu'
import Content from './Content';

interface InternalLayoutProps {
  children: React.ReactNode;
}
export interface LayoutProps extends React.FC<InternalLayoutProps> {
  Header: typeof Header;
  Content: typeof Content;
  Menu: typeof Menu;
}

const InternalLayout: React.FC<InternalLayoutProps> = ({
  children,
}) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
)

const Layout = InternalLayout as LayoutProps

Layout.Header = Header
Layout.Content = Content
Layout.Menu = Menu

export default Layout
