import React, { Component } from 'react'

import { graphql, gql } from 'react-apollo';

import { LoginForm } from '../shared/components/login-form/LoginForm'

const auth = graphql(
  gql`
mutation LoginUserQuery ($input: LoginUserInput!) {
  loginUser(input: $input) {
    token user { id username createdAt }
  }
}
`
);

class AuthSkeleton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      token: props.token
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

      const token = response.data.loginUser.token

      this.setState({
        token: token
      })

      this.props.handleAuth( token )

    }).catch((error) => {
      throw new Error( `[ERROR]: Login returned: ${error}` )
    })

  }

  render() {

    return (
      <div>
        {
          this.state.token ?
            this.props.children :
            <LoginForm handleLogin={this.handleLogin} />
        }
      </div>
    )
  }

}

const Auth = auth(AuthSkeleton)

export {
  Auth
}
