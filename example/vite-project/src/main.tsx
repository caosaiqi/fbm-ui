/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom'
import {
  FolderIcon, HomeIcon,
} from '@avocadoui/icons';


import Router from './Router'
import { Layout } from '../../../src'

const menuPrpos = {
  menus: [
    {
      title: 'Typography',
      icon: <HomeIcon />,
      link: '/',
      selected: true,
      onClick: ()=> {
        // const history = useHistory();
        // history.push("/rypography");
      },
    },
    {
      title: '人才库',
      icon: <FolderIcon />,
      link: '/',
    },
  ],
}

const Main = () => (
  <React.StrictMode>
    <Layout menuPrpos={menuPrpos}>
      <Router />
    </Layout>
  </React.StrictMode>
)

ReactDOM.render(<Main />, document.getElementById('root'))
