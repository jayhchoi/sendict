import { prisma } from '../../prisma/generated/prisma-client'

export default {
  User: {
    sentences: parent => {
      return prisma.user({ id: parent.id }).sentences()
    }
  }
}
