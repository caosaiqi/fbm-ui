import * as React from 'react';

import Header from '../Header'
import Menu from '../Menu'
import Content from '../Content';
import ThemeProvider from '../ThemeProvider'

export interface LayoutProps {
    children: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = ({
    children,
}) => (
    <ThemeProvider>
        <Header />
        <Content>
            <Menu menus={[
                {
                    title: '首页',
                    selected: true,
                },
                {
                    title: '人才库',
                },
                
            ]} />
            {children}
        </Content>
    </ThemeProvider>
)

export default Layout
