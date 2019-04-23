import jwt from 'jsonwebtoken'

const getUserId = (request, requireAuth = true) => {
  // Get http authorization header
  const header = request.request
    ? request.request.headers.authorization
    : request.connection.context.Authorization

  if (!header) {
    if (requireAuth) throw new Error('Authentication required')

    return null
  }

  // Verify token
  const token = header.replace('Bearer ', '')
  const decoded = jwt.verify(token, process.env.SECRET_OR_KEY) // This verifies AND THEN decodes

  return decoded.id
}

export default getUserId
