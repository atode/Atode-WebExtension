import React, { Component } from 'react'

import {
  Button,
  Cell,
  Input,
  LayoutGrid,
  Label
} from '../../../../external_modules/material-design'

import './LoginForm.css'

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
      <div className="loginForm">
        <h1>Login to Atode</h1>
        <form onSubmit={this.handleSubmit}>
          <LayoutGrid>
            <Cell>
              <Label hint="username">
                <Input
                  onChange={this.handleInput}
                  onBlur={this.handleInput}
                  type="text"
                  name="username"
                  value={this.state.username}
                  />
              </Label>
            </Cell>
            <Cell>
              <Label hint="password">
                <Input
                  onChange={this.handleInput}
                  onBlur={this.handleInput}
                  type="password"
                  name="password"
                  value={this.state.password}
                />
              </Label>
            </Cell>
            <Cell>
              <Button type="submit">Login</Button>
            </Cell>
          </LayoutGrid>
        </form>
      </div>
    )
  }

}

export {
  LoginForm
}
