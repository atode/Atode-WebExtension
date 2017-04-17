
import React, { Component } from 'react'

export class LoginSkeleton extends Component {

  render() {

    return (
      <div>
        <h1>Login</h1>
      </div>
    );

  }

}

// @TODO: connect backend
const Login = LoginSkeleton;

export {
  Login
};
