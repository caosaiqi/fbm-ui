
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import typography from './pages/typography'
import mask from './pages/mask'
import tooltip from './pages/tooltip'

const routes = [
  {
    path: '/typography',
    Component: typography,
  },
  {
    path: '/mask',
    Component: mask,
  },
  {
    path: '/tooltip',
    Component: tooltip,
  },
]

export default () => {
  const routeItms = routes.map(({ path, Component }) => <Route key={path} path={path}> <Component /></Route>)
  const styles = {
    padding: '20px',
    backgroundColor: '#F3F6F9',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={styles}>
      <div style={{ backgroundColor: '#fff', padding: 15, borderRadius: 5, marginBottom: '30%' }}>
        <Router>
          <Switch>
            {routeItms}
          </Switch>
        </Router>
      </div>
    </div>
  )
}


