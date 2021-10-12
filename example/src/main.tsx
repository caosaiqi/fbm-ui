/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
// import { LayerIcon } from '@avocadoui/icons';

import Router from './Router'
import { Alayout } from '../../src'

const { Header, Content, Menu } = Alayout

const Main = () =>
// const menuPrpos = {
//   menus: routes.map(route => ({
//       title: route.path,
//       icon: <LayerIcon />,
//       onClick: () => {
//         // browserHistory.push('/Typography')
//         location.href = `${location.origin}${route.path}`
//       },
//     })),
// [
//   {
//     title: 'Typography',
//     icon: <LayerIcon />,
//     link: '/',
//     selected: true,
//     onClick: () => {
//       // browserHistory.push('/Typography')
//       location.href = `${location.origin}/Typography`
//     },
//   },
// ],
// }
(
  <React.StrictMode>
    <Alayout>
      <Header />
      <Content>
        <Router />
      </Content>
    </Alayout>
  </React.StrictMode>
)


ReactDOM.render(<Main />, document.getElementById('root'))
