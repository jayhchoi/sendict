import React from 'react'
import PropTypes from 'prop-types'

import useInput from '../../hooks/useInput'

function Login({ setShowLogin }) {
  const usernameInput = useInput('')
  const passwordInput = useInput('')

  return (
    <div>
      <input
        type="text"
        placeholder="아이디"
        value={usernameInput.value}
        onChange={usernameInput.onChange}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={passwordInput.value}
        onChange={passwordInput.onChange}
      />
      <button>로그인</button>
      <button onClick={() => setShowLogin(false)}>
        아직 회원이 아니신가요?
      </button>
    </div>
  )
}

Login.propTypes = {
  setShowLogin: PropTypes.func.isRequired
}

export default Login
