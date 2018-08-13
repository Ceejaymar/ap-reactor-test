import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section className="header-section">
      <div className="navigation">
        <p className="navigation__brand">Reactor</p>
        <NavLink className="navigation__link" to="/login" activeClassName="active">Log In</NavLink>
      </div>

      <h1 className="welcome">Hello, welcome to Reactor</h1>
    </section>
  )
};

export default Header;