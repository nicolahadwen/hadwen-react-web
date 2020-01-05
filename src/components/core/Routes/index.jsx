import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import AccountSettings from '../../presentational/AccountSettings';
import Dashboard from '../../presentational/Dashboard';
import Login from '../../presentational/Login';

const Routes = () => (
  <Switch>
    <Route path="/account">
      <AccountSettings />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/">
      <Dashboard />
    </Route>
  </Switch>
);

export default Routes;
