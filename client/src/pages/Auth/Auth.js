import React, { useState } from 'react'

import Login from './Login'
import Signup from './Signup'

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true)

  return showLogin ? (
    <Login setShowLogin={setShowLogin} />
  ) : (
    <Signup setShowLogin={setShowLogin} />
  )
}
