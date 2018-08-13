import React, { Fragment, Component } from 'react';
import Header from './Header';
import About from './About';
import Examples from './Examples';
import Travel from './Travel';
import Subscribe from './Subscribe';

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <Examples />
        <Travel />
        <Subscribe />
      </Fragment>
    );
  }
}

export default Landing;