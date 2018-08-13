import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import './css/style.css';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
