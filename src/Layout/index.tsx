import * as React from 'react';

import Header from '../Header'
import Menu from '../Menu'
import Content from '../Content';
import ThemeProvider from '../ThemeProvider'

export interface LayoutProps {
    children: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <ThemeProvider>
            <Header />
            <Menu />
            <Content />
        </ThemeProvider>
    )
}

export default Layout
