
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import icon from './pages/icon'
// import typography from './pages/typography'
// import mask from './pages/mask'
// import tooltip from './pages/tooltip'
// import avatar from './pages/avatar'
// import menu from './pages/menu'
// import toast from './pages/toast'
// import dialog from './pages/dialog'
// import alert from './pages/alert'
// import loading from './pages/loading'

export const routes = [
  {
    path: '/icon',
    Component: icon,
  },
  // {
  //   path: '/typography',
  //   Component: typography,
  // },
  // {
  //   path: '/mask',
  //   Component: mask,
  // },
  // {
  //   path: '/tooltip',
  //   Component: tooltip,
  // },
  // {
  //   path: '/avatar',
  //   Component: avatar,
  // },
  // {
  //   path: '/menu',
  //   Component: menu,
  // },
  // {
  //   path: '/toast',
  //   Component: toast,
  // },
  // {
  //   path: '/dialog',
  //   Component: dialog,
  // },
 
  // {
  //   path: '/alert',
  //   Component: alert,
  // },
  // {
  //   path: '/loading',
  //   Component: loading,
  // },
]

export default () => {
  const routeItms = routes.map(({ path, Component }) => <Route key={path} path={path}> <Component /></Route>)
  const styles = {
    padding: '20px',
    backgroundColor: '#F3F6F9',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
 
  return (
    <div style={styles}>
      <div style={{ backgroundColor: '#fff',  borderRadius: 5, marginBottom: '30%', padding: 30}}>
        <Router>
          <Switch>
            {routeItms}
          </Switch>
        </Router>
      </div>
    </div>
  )
}


