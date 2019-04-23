import bcrypt from 'bcryptjs'

const hashPassword = (password, password2) => {
  if (password !== password2) throw new Error('비밀번호가 일치하지 않습니다')
  if (password.length < 8)
    throw new Error('비밀번호는 최소 8자 이상만 가능합니다')

  return bcrypt.hash(password, 10) // This returns a promise!
}

export default hashPassword
