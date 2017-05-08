import React, { Component } from 'react'

import { graphql, gql } from 'react-apollo';

import { Login } from '../pages/login/Login'

const loginUser = graphql(
  gql`
query LoginUserQuery {
  viewer {
    user {
      id,
      username,
      createdAt
    }
  }
}
`
);

class LoginSwitchSkeleton extends Component {

  render() {
    return (
      <div>
        {
          this.props.data.user ?
            this.props.children :
            <Login />
        }
      </div>
    )
  }

}

const LoginSwitch = loginUser(LoginSwitchSkeleton)

export {
  LoginSwitch
}
