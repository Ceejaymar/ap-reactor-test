import React, { Component } from 'react';
import axios from 'axios';
import { stringify } from 'qs';

class SignUp extends Component {
  state = { 
    email: '',
    username: '',
    password: '' }

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
      password: this.state.password ,
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange.bind(this, 'username')} placeholder="Username" />
          <input type="email" onChange={this.handleChange.bind(this, 'email')} placeholder="Email" />
          <input type="password" onChange={this.handleChange.bind(this, 'password')} placeholder="Password" />
          <button type="submit" disabled={!this.validateForm()}>Sign up</button>
        </form>
      </div>
    )
  }
}

export default SignUp;