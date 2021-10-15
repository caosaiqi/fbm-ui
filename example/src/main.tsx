/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { LayerIcon } from '@avocadoui/icons';

import Router, {routes} from './Router'
import { Alayout, MenuItem} from '../../src'

const { Header, Content } = Alayout

const menuPrpos = {
  menus: routes.map(route => ({
      title: route.title,
      icon: <LayerIcon />,
      onClick: () => {
        location.href = `${location.origin}${route.path}`
      },
    })),
}

const Main = () =>(
  <React.StrictMode>
    <Alayout>
      <Header />
      <Content menu={menuPrpos} >
        <MenuItem>asdsad</MenuItem>
        <Router />
      </Content>
    </Alayout>
  </React.StrictMode>
)


ReactDOM.render(<Main />, document.getElementById('root'))
