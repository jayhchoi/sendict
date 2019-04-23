import { prisma } from '../../../prisma/generated/prisma-client'
import hashPassword from '../../../utils/hashPassword'
import getUserId from '../../../utils/getUserId'
import bcrypt from 'bcryptjs'

export default {
  Mutation: {
    updateUser: async (_, { data }, { request }) => {
      const userId = getUserId(request)
      const user = await prisma.user({ id: userId })
      let password

      const passwordIsConfirmed = bcrypt.compareSync(
        data.password,
        user.password
      )
      if (!passwordIsConfirmed) throw new Error('이전 비밀번호가 틀립니다.')
      delete data.password

      if (data.newPassword && data.newPassword2) {
        password = await hashPassword(data.newPassword, data.newPassword2)
        delete data.newPassword
        delete data.newPassword2
      }

      return prisma.updateUser({
        data: { ...data, password },
        where: {
          id: userId
        }
      })
    }
  }
}
