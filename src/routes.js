import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import AppliedRoute from './components/AppliedRoute';
import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';

export default () => 
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
    <Route component={NotFound} />
  </Switch>