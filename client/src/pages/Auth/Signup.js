import React from 'react'
import PropTypes from 'prop-types'

import useInput from '../../hooks/useInput'

function Signup({ setShowLogin }) {
  const usernameInput = useInput('')
  const emailInput = useInput('')
  const nameInput = useInput('')
  const passwordInput = useInput('')
  const password2Input = useInput('')

  return (
    <div>
      <input
        type="text"
        placeholder="아이디"
        value={usernameInput.value}
        onChange={usernameInput.onChange}
      />
      <input
        type="email"
        placeholder="이메일"
        value={emailInput.value}
        onChange={emailInput.onChange}
      />
      <input
        type="text"
        placeholder="이름"
        value={nameInput.value}
        onChange={nameInput.onChange}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={passwordInput.value}
        onChange={passwordInput.onChange}
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={password2Input.value}
        onChange={password2Input.onChange}
      />
      <button>회원가입</button>
      <button onClick={() => setShowLogin(true)}>이미 회원이신가요?</button>
    </div>
  )
}

Signup.propTypes = {
  setShowLogin: PropTypes.func.isRequired
}

export default Signup
