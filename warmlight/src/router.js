import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { renderAuthorized } from './components/Authorized';
import Login from './pages/Login';
import Portfolio from './pages/Home/Portfolio';

const withAuthorized = renderAuthorized(
  state => state.user.isAuthenticated,
  '/login'
);

const routes = [
  {
    title: '投资组合',
    path: '/home/portfolio',
    component: withAuthorized(Portfolio)
  },
  {
    title: '登录',
    path: '/login',
    component: Login
  }
];

export default function configureRouter() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} exact path={route.path} component={route.component} />
        ))}
        <Redirect to="/home/portfolio" />
      </Switch>
    </Router>
  );
}
