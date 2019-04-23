import { prisma } from '../../../prisma/generated/prisma-client'
import bcrypt from 'bcryptjs'

export default {
  Mutation: {
    deleteUser: async (_, { password }, { request, getUserId }) => {
      const userId = getUserId(request)
      const user = await prisma.user({ id: userId })

      const passwordIsConfirmed = bcrypt.compareSync(password, user.password)
      if (!passwordIsConfirmed) throw new Error('비밀번호가 틀립니다.')

      return prisma.deleteUser({ id: userId })
    }
  }
}
