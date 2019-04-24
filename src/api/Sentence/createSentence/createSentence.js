import { prisma } from '../../../prisma/generated/prisma-client'

export default {
  Mutation: {
    createSentence: async (_, { data }, { request, getUserId }) => {
      const userId = getUserId(request)

      const { id: dictId } = await prisma.user({ id: userId }).dictionary()

      return prisma.createSentence({
        ...data,
        author: {
          connect: {
            id: userId
          }
        },
        dictionaries: {
          connect: {
            id: dictId
          }
        }
      })
    }
  }
}

// await data.tags.forEach(async tag => {
//   await prisma.upsertTag({
//     where: {
//       name: tag
//     },
//     update: {
//       name: tag
//     },
//     create: {
//       name: tag
//     }
//   })
// })
