import { prisma } from '../../../prisma/generated/prisma-client'

export default {
  Mutation: {
    addSentence: async (_, { data }, { request, getUserId }) => {
      // const userId = getUserId(request)

      return prisma.createSentence({
        ...data,
        user: {
          connect: {
            email: 'jaychoi1619@gmail.com'
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
