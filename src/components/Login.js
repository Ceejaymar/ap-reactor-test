import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { stringify } from 'qs';

class Login extends Component {
  constructor(props) {
    super(props)
    
    this.state = { 
      email: '',
      password: ''
    }
  }

  validateForm = () => {
    return this.state.email.length > 0 
      && this.state.password.length > 0
  }

  handleChange = (input, e) => {
    this.setState({
      [input]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const that = this;
    const data = { 
      email: this.state.email,
      password: this.state.password
    }

    axios({
      method: 'POST',
      url: 'http://dev3.apppartner.com/Reactors/scripts/user-login.php',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: stringify(data)
    })
      .then(response => {
        that.props.history.push('/');
      })
      .catch(e => {
        alert('Something went wrong, try again!')
      })
  }

  render() {
    return (
      <section className="auth-section">
        <div className="navigation">
          <p className="navigation__brand">Reactor</p>
        </div>
        <div className="auth-container">
          <div className="auth">
            <div className="auth__options"> 
              <NavLink className="auth__link" to="/signup">Sign Up</NavLink>
              <NavLink className="auth__link auth__active" to="/login">Login</NavLink>
            </div>
            <form className="auth__form" onSubmit={this.handleSubmit}>
              <input className="auth__input" type="email" onChange={this.handleChange.bind(this, 'email')} placeholder="Email" />
              <input className="auth__input" type="password" onChange={this.handleChange.bind(this, 'password')} placeholder="Password" />
              <button className="auth__button" type="submit" disabled={!this.validateForm()}>Login</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login;