import React, { Component } from 'react';

import { Main } from './pages/main/Main';

import { Auth } from './containers/Auth';

import {
  ApolloClient,
  ApolloProvider
} from 'react-apollo';

import { networkInterface } from './shared/services/networkInterface'

const client = new ApolloClient({ networkInterface });

export class App extends Component {

  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleLogout() {
    localStorage.removeItem('token')
    window.location = '/'
  }

  handleAuth(token) {
    localStorage.setItem('token', token)
    window.location = '/'
  }

  render() {

    const token = localStorage.getItem('token')

    return (
      <ApolloProvider client={client}>
        <Auth
          token={token}
          handleAuth={this.handleAuth}
        >
          <Main handleLogout={this.handleLogout} />
        </Auth>
      </ApolloProvider>
    )

  }
}
