import { prisma } from '../../../prisma/generated/prisma-client'

export default {
  Query: {
    users: (_, { query }) => {
      const opArgs = {}

      if (query) {
        opArgs.where = {
          OR: [
            {
              name_contains: query
            },
            {
              email_contains: query
            },
            {
              username_contains: query
            }
          ]
        }
      }
      return prisma.users(opArgs)
    }
  }
}
