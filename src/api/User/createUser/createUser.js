import { prisma } from '../../../prisma/generated/prisma-client'
import hashPassword from '../../../utils/hashPassword'
import generateToken from '../../../utils/generateToken'
import gravatar from 'gravatar'

export default {
  Mutation: {
    createUser: async (_, { data }) => {
      const password = await hashPassword(data.password, data.password2) // Confirm and hash
      delete data.password2

      const avatar = gravatar.url(data.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm' // Default img
      })

      const user = await prisma.createUser({
        ...data,
        password,
        avatar,
        dictionary: { create: {} }
      })

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
