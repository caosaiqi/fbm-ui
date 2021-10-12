import * as React from 'react';

// import ThemeProvider from '../ThemeProvider'
import Main from './Main'
import Header from './Header'
import Menu from './Menu'
import Content from './Content';

export interface LayoutProps {
  children: React.ReactNode;
}

// const Layout: React.FC<LayoutProps> = ({
//   children,
// }) => (
//   <div>
//     {children}
//   </div>
// )


// export { Header, Main, Content, Menu };
export default { Header, Main, Content, Menu };
