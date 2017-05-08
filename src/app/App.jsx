import React, { Component } from 'react';

import { Main } from './pages/main/Main';

import { LoginSwitch } from './containers/LoginSwitch';

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
        <LoginSwitch>
          <Main />
        </LoginSwitch>
      </ApolloProvider>
    )

  }
}
