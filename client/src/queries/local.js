import { gql } from 'apollo-boost'

export const AUTH = gql`
  {
    auth @client {
      isAuthenticated
      user {
        id
        name
        username
        avatar
      }
    }
  }
`

export const AUTHENTICATE = gql`
  mutation authenticate($token: String!) {
    authenticate(token: $token) @client
  }
`

export const UNAUTHENTICATE = gql`
  mutation {
    unAuthenticate @client
  }
`
