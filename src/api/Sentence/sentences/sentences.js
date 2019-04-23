import { prisma } from '../../../prisma/generated/prisma-client'

// PUBLIC
export default {
  Query: {
    sentences: (_, { query }) => {
      return prisma.sentences({
        where: {
          OR: [
            {
              english_contains: query
            },
            {
              korean_contains: query
            },
            {
              tags_some: {
                name_contains: query
              }
            }
          ]
        }
      })
    }
  }
}
