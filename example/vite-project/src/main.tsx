/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import {
  FolderIcon, HomeIcon,
} from '@avocadoui/icons';
// eslint-disable-next-line import/no-unresolved
import { Layout, Typography } from '../../../src'
import styles from './main.css'

const Typographys = () => {
  const colors = [
    'error',
    'warning',
    'success',
    'info',
    'secondary',
    'primary',
    'disabled',
  ]
  const tags = [
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
  ]
  const typographys: JSX.Element[] = []

  tags.forEach(tag => {
    colors.forEach(color => {
      typographys.push(
        <div key={`${tag}${color}`} style={{ marginBottom: 10 }}>
          <Typography variant={tag} color={color}>
            hello Typography
          </Typography>
        </div>,
      )
    })
  })
  return typographys
}


const Main = () => {
  const menuPrpos = {
    menus: [
      {
        title: '首页',
        icon: <HomeIcon />,
        link: '/',
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
        <div style={{
          padding: '15px 20px',
        }}>
          <Typographys />
        </div>
      </Layout>
    </React.StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
