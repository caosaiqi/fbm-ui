/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { useHistory, Route} from 'react-router-dom'
import {
  FolderIcon, HomeIcon,
} from '@avocadoui/icons';


import Router from './Router'
import { Layout } from '../../../src'


const Main = (props) => {
  const history = useHistory();
  console.log(history)
  const menuPrpos = {
    menus: [
      {
        title: 'Typography',
        icon: <HomeIcon />,
        link: '/',
        selected: true,
        onClick: () => {
          console.log(props)
        },
      },
      {
        title: '人才库',
        icon: <FolderIcon />,
        link: '/',
      },
    ],
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
