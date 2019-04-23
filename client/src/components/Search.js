import React from 'react'
import useInput from '../hooks/useInput'

export default function Search() {
  const queryInput = useInput('')

  return (
    <div>
      <h3>영어표현 DB 검색하기</h3>
      <input type="text" placeholder="필요한 영어 표현을 검색하세요" />
      <button>검색</button>
    </div>
  )
}
