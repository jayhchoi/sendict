import { GraphQLServer } from 'graphql-yoga'
import logger from 'morgan'
import schema from './schema'
import getUserId from './utils/getUserId'

const server = new GraphQLServer({
  schema,
  context(request) {
    return {
      request,
      getUserId
    }
  }
})

const options = {
  port: process.env.PORT || 4000,
  endpoint: '/graphql',
  playground: '/playground'
}

server.use(logger('dev'))

server.start(options, () =>
  console.log(`✅  Server running on port ${options.port}`)
)
