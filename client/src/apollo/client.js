import ApolloClient from 'apollo-boost'
import { defaults, resolvers } from './localState'

const client = new ApolloClient({
  uri: '/graphql',
  clientState: {
    defaults,
    resolvers
  },
  request: operation => {
    const token = localStorage.getItem('sendict-jwt')
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
})

export default client
