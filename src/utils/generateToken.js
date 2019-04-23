import jwt from 'jsonwebtoken'

export default userPayload => {
  return jwt.sign(userPayload, process.env.SECRET_OR_KEY, { expiresIn: '7d' })
}
