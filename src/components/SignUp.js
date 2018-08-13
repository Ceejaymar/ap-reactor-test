import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { stringify } from 'qs';

class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password: ''
  }

  validateForm = () => {
    return this.state.email.length > 0
      && this.state.username.length > 0
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
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }

    axios({
      method: 'POST',
      url: 'http://dev3.apppartner.com/Reactors/scripts/user-signup.php',
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
              <NavLink className="auth__link auth__active" to="/signup">Sign Up</NavLink>
              <NavLink className="auth__link" to="/login">Login</NavLink>
            </div>
            <form className="auth__form" onSubmit={this.handleSubmit}>
              <input className="auth__input" type="text" onChange={this.handleChange.bind(this, 'username')} placeholder="Username" />
              <input className="auth__input" type="email" onChange={this.handleChange.bind(this, 'email')} placeholder="Email" />
              <input className="auth__input" type="password" onChange={this.handleChange.bind(this, 'password')} placeholder="Password" />
              <button className="auth__button" type="submit" disabled={!this.validateForm()}>Sign up</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default SignUp;