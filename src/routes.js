import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import AppliedRoute from './components/AppliedRoute';

export default ({ childProps }) => 
  <Switch>
    <AppliedRoute exact path='/' component={Landing} props={childProps} />
    <Route component={NotFound} />
  </Switch>