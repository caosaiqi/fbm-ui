/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from '../../../src'
import {
  FolderIcon, HomeIcon, LayerIcon, PeopleIcon, SettingIcon,
} from '@avocadoui/icons';

const Main = () => {
  const menuPrpos = {
    menus: [
      {
        title: '首页',
        icon: <HomeIcon />,
        link:'/',
        selected: true,
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
        <h1>hello world</h1>
      </Layout>
    </React.StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
