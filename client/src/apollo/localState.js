import jwt from 'jsonwebtoken'

const SECRET_OR_KEY = process.env.REACT_APP_SECRET_OR_KEY

const token = localStorage.getItem('sendict-jwt')

export const defaults = {
  auth: {
    __typename: 'Auth',
    isAuthenticated: !!token,
    user: token
      ? {
          __typename: 'User',
          ...jwt.verify(token, SECRET_OR_KEY)
        }
      : null
  }
}

export const resolvers = {
  Mutation: {
    authenticate: (_, { token }, { cache }) => {
      try {
        localStorage.setItem('sendict-jwt', token)
        const user = jwt.verify(token, SECRET_OR_KEY)
        cache.writeData({
          data: {
            auth: {
              __typename: 'Auth',
              isAuthenticated: true,
              user: {
                __typename: 'User',
                ...user
              }
            }
          }
        })
      } catch (error) {
        console.log(error)
      }

      return null
    },
    unAuthenticate: (_, args, { cache }) => {
      localStorage.removeItem('sendict-jwt')
      window.location.reload()
      return null
    }
  }
}
