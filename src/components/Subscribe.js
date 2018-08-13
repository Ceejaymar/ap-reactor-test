import React, { Component } from 'react';
import axios from 'axios';
import { stringify } from 'qs';

class Subscribe extends Component {
  state = { email: '' }

  validateForm = () => {
    return this.state.email.length > 0
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const email = { email: this.state.email }

    const data = {
      method: 'POST',
      url: 'http://dev3.apppartner.com/Reactors/scripts/add-email.php',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: stringify(email)
    }
    
    axios(data)
      .then(response => {
        alert('Thank you for subscibing to our newsletter!')
      })
      .catch(e => {
        alert('hmm, something went wrong. Try again!')
      })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="email" type="email" ref={this.emailRef} onChange={this.handleChange.bind(this)} placeholder="Your Email" />
          <button type="submit" disabled={!this.validateForm()} >Subscribe</button>
        </form>
      </div>
    )
  }
}

export default Subscribe;