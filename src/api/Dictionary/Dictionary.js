import { prisma } from '../../prisma/generated/prisma-client'

export default {
  Dictionary: {
    sentences: parent => {
      return prisma.sentences({
        where: { dictionaries_some: { id: parent.id } }
      })
    }
  }
}
