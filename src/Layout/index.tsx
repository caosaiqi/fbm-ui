import * as React from 'react';

import ThemeProvider from '../ThemeProvider'
import Main from './src/main'
import Header, { HeaderPrpos } from './src/header'
import Menu, { MenuPrpos } from './src/menu'
import Content from './src/content';

export interface LayoutProps {
  children: React.ReactNode;
  menuPrpos?: MenuPrpos;
  header?: HeaderPrpos | null;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  menuPrpos,
  header,
}) => {

  const HeaderRender = () => {
    if (header === null) return null
    return <Header {...header} />
  }

  return (
    <ThemeProvider>
      <HeaderRender />
      <Main>
        <Menu {...menuPrpos} />
        <Content>
          {children}
        </Content>
      </Main>
    </ThemeProvider>
  )
}

export default Layout
