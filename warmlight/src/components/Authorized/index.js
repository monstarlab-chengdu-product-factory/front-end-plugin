import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

export function Fallback({ to, referer }) {
  const location = { pathname: to, state: { referer } };
  return <Redirect to={location} />;
}

export function FallbackRoute(fallback, ...routeProps) {
  return (
    <Route
      {...routeProps}
      render={props => <Fallback to={fallback} referer={props.location} />}
    />
  );
}

export function Authorized({ isAuthenticated, fallback, children }) {
  return isAuthenticated ? children : fallback;
}

export function AuthorizedRoute({ isAuthenticated, fallback, ...routeProps }) {
  return (
    <Authorized
      isAuthenticated={isAuthenticated}
      fallback={<FallbackRoute to={fallback} {...routeProps} />}
    >
      <Route {...routeProps} />
    </Authorized>
  );
}

export function renderAuthorized(mapState, fallback) {
  const ConnectedAuthorized = connect(state => ({
    isAuthenticated: mapState(state)
  }))(Authorized);

  return function withAuthorized(Component) {
    function WithAuthorized(props) {
      return (
        <ConnectedAuthorized
          fallback={<Fallback to={fallback} referer={props.location} />}
        >
          <Component {...props} />
        </ConnectedAuthorized>
      );
    }

    const displayName = Component.displayName || Component.name || 'Component';
    WithAuthorized.displayName = `withAuthorized(${displayName})`;

    return WithAuthorized;
  };
}
