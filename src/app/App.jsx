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
  render() {

    return (
      <ApolloProvider client={client}>
        <Auth
          token={localStorage.getItem('token')}
          handleAuth={( token ) => localStorage.setItem('token', token)}
        >
          <Main handleLogout={() => localStorage.removeItem('token')} />
        </Auth>
      </ApolloProvider>
    )

  }
}
