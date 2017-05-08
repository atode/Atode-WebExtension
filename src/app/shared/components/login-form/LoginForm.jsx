import React, { Component } from 'react'

import { Button } from '../../../../external_modules/material-design'

class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit( event ) {

    event.preventDefault()

    this.props.handleLogin(this.state)

  }

  handleInput( event ) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Login to Atode app</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput}
            onBlur={this.handleInput}
            type="text"
            name="username"
            value={this.state.username}
          />
          <input
            onChange={this.handleInput}
            onBlur={this.handleInput}
            type="password"
            name="password"
            value={this.state.password}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    )
  }

}

export {
  LoginForm
}
