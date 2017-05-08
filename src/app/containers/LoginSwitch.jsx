import React, { Component } from 'react'

import { graphql, gql } from 'react-apollo';

import { LoginForm } from '../shared/components/login-form/LoginForm'

const login = graphql(
  gql`
mutation LoginUserQuery ($input: LoginUserInput!) {
  loginUser(input: $input) {
    token user { id username createdAt }
  }
}
`
);

class LoginSwitchSkeleton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
  }


  handleLogin( data ) {

    this.props.mutate({
      variables: {
        input: {
          username: data.username,
          password: data.password
        }
      }
    }).then((response) => {

      localStorage.setItem('authToken', response.data.loginUser.token)
      localStorage.setItem('username', response.data.loginUser.user.username)
      localStorage.setItem('userId', response.data.loginUser.user.id)

      this.setState({
        username: response.data.loginUser.user.username
      })

    }).catch((error) => {
      throw new Error( `[ERROR]: Login returned: ${error}` )
    })

  }

  render() {

    return (
      <div>
        <h1>{this.state.username}</h1>
        {
          this.state.username ?
            this.props.children :
            <LoginForm handleLogin={this.handleLogin} />
        }
      </div>
    )
  }

}

const LoginSwitch = login(LoginSwitchSkeleton)

export {
  LoginSwitch
}
