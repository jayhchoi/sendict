import generateToken from '../../../utils/generateToken'
import { prisma } from '../../../prisma/generated/prisma-client'
import bcrypt from 'bcryptjs'

export default {
  Mutation: {
    loginUser: async (_, { data }) => {
      const user = await prisma.user({ email: data.email })
      if (!user)
        throw new Error('해당 이메일과 연결된 계정을 찾을 수 없습니다.')

      const passwordIsConfirmed = await bcrypt.compare(
        data.password,
        user.password
      )
      if (!passwordIsConfirmed)
        throw new Error('비밀번호가 틀립니다. 다시 시도해 주세요.')

      const userPayload = {
        id: user.id,
        name: user.name,
        avatar: user.avatar
      }

      return {
        token: generateToken(userPayload),
        user
      }
    }
  }
}
