/* eslint-disable */
import { config } from '../../config'

import {
  createNetworkInterface,
  applyMiddleware,
  applyAfterware
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: config.scapholdUrl
})

// use the auth0IdToken in localStorage for authorized requests
networkInterface.use([{
  applyMiddleware(req, next) {

    if (!req.options.headers) {
      req.options.headers = {}
    }

    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('authToken')
    if ( token ) {
      req.options.headers.authorization = `Bearer ${token}`
    }
    next()
  },
}])

// Sign off on unauthenticated request
networkInterface.useAfter([{
  applyAfterware({ response, options }, next) {
    if (response.status === 401) {
      localStorage.removeItem('authToken')
      localStorage.removeItem('username')
      localStorage.removeItem('userId')
    }
    next()
  }
}])

export {
  networkInterface
}

