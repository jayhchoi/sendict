import { prisma } from '../../../prisma/generated/prisma-client'

// PUBLIC
export default {
  Query: {
    sentences: (_, { query }) => {
      const opArgs = {}

      if (query) {
        opArgs.where = {
          OR: [
            {
              english_contains: query
            },
            {
              korean_contains: query
            },
            {
              source_contains: query
            }
          ]
        }
      }

      return prisma.sentences()
    }
  }
}
