/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { LayerIcon } from '@avocadoui/icons';

import Router, { routes } from './Router'
import { Layout } from '../../src'


const Main = () => {


  const menuPrpos = {
    menus: routes.map(route => ({
        title: route.path,
        icon: <LayerIcon />,
        onClick: () => {
          // browserHistory.push('/Typography')
          location.href = `${location.origin}${route.path}`
        },
      })),
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
  }

  return (
    <React.StrictMode>
      <Layout menuPrpos={menuPrpos}>
        <Router />
      </Layout>
    </React.StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
