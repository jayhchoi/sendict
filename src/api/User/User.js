import { prisma } from '../../prisma/generated/prisma-client'

export default {
  User: {
    sentence: parent => {
      return prisma.user({ id: parent.id }).sentences()
    }
  }
}
