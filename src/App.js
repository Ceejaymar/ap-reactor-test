import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './routes';
import './css/style.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      isAuthenticated: false
    };
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
    };

    return (
      <div className="App">
        <div>this is the app component</div>

        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
