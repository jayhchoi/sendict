import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo-hooks'

import { App } from './components'
import client from './apollo/client'

import './index.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
