import React, { Component } from 'react';
import axios from 'axios';
import { stringify } from 'qs';

class Login extends Component {
  constructor(props) {
    super(props)
    console.log(props);
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" onChange={this.handleChange.bind(this, 'email')} placeholder="Email" />
          <input type="password" onChange={this.handleChange.bind(this, 'password')} placeholder="Password" />
          <button type="submit" disabled={!this.validateForm()}>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;