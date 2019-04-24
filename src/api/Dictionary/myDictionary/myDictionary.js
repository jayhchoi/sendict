import { prisma } from '../../../prisma/generated/prisma-client'

export default {
  Query: {
    myDictionary: (_, __, { request, getUserId }) => {
      const userId = getUserId(request)

      return prisma.user({ id: userId }).dictionary()
    }
  }
}
