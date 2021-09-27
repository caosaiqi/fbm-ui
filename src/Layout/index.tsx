import * as React from 'react';

import ThemeProvider from '../ThemeProvider'
import Main from './src/main'
import Header from './src/header'
import Menu from './src/menu'
import Content from './src/content';

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
    <Main>
      <Menu {...menuPrpos} />
      <Content>
        {children}
      </Content>
    </Main>
  </ThemeProvider>
)


export default Layout
