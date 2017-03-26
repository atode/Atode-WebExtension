import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://us-west-2.api.scaphold.io/graphql/atode' }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
