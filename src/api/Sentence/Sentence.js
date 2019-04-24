import { prisma } from '../../prisma/generated/prisma-client'

export default {
  Sentence: {
    author: parent => {
      return prisma.sentence({ id: parent.id }).author()
    }
  }
}
