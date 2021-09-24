import * as React from 'react';

import Header from '../Header'
import Menu, { MenuPrpos } from '../Menu'
import Content from '../Content';
import ThemeProvider from '../ThemeProvider'

export interface LayoutProps {
  children: React.ReactNode,
  menuPrpos?: MenuPrpos
}

const Layout: React.FC<LayoutProps> = ({
  children,
  menuPrpos,
}) => (
  <ThemeProvider theme={{}}>
    <Header />
    <Content>
      <Menu {...menuPrpos} />
      {children}
    </Content>
  </ThemeProvider>
)


export default Layout
