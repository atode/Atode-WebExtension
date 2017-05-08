import React, { Component } from 'react'
import { Button } from '../../../external_modules/material-design'

import { graphql, gql } from 'react-apollo';

const loginUser = graphql(
  gql`
mutation LoginUserQuery ($input: LoginUserInput!) {
  loginUser(input: $input) {
    token user { id username createdAt }
  }
}
`
);

export class LoginSkeleton extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput( event ) {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit( event ) {

    event.preventDefault()

    this.props.mutate({
      variables: {
        input: {
          username: this.state.username,
          password: this.state.password
        }
      }
    }).then((_) => {
      console.log(_)
    }).catch((_) => {
      console.log(_)
    })

  }

  render() {
    return (
      <div>
        <h1>
          Login to Atode app
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} onBlur={this.handleInput} type="text" name="username" value={this.state.username} />
          <input onChange={this.handleInput} onBlur={this.handleInput} type="password" name="password" value={this.state.password} />
          <Button type="submit">Login</Button>
        </form>
      </div>
    )
  }

}

const Login = loginUser(LoginSkeleton);

export {
  Login
}
