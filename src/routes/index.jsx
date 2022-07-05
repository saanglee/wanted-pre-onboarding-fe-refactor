import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import {
  ROUTE_PATH__LOGIN,
  ROUTE_PATH__HOME,
} from '../constants/routes.js';
import { useUserState } from '../store/auth/provider';
import Home from '../pages/Home';
import Login from '../pages/Login';

const RequireAuthNavigation = ({ children, token }) =>
  !token ? <Navigate to={ROUTE_PATH__LOGIN} replace /> : children;

const AuthenticatedUserNavigation = ({ children, token }) =>
  token ? <Navigate to={ROUTE_PATH__HOME} replace /> : children;

const Routes = () => {
  const { token } = useUserState();
  const routes = useRoutes([
    {
      path: ROUTE_PATH__LOGIN,
      element: (
        <AuthenticatedUserNavigation token={token}>
          <Login />
        </AuthenticatedUserNavigation>
      ),
    },
    {
      path: ROUTE_PATH__HOME,
      element: (
        <RequireAuthNavigation token={token}>
          <Home />
        </RequireAuthNavigation>
      ),
    },
  ]);

  return routes;
};

export default Routes;
