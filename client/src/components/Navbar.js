import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">홈</NavLink>
        </li>
        <li>
          <NavLink to="/dictionary">문장사전</NavLink>
        </li>
        <li>
          <NavLink to="/learn">학습하기</NavLink>
        </li>
        <li>
          <NavLink to="/review">복습하기</NavLink>
        </li>
      </ul>
    </nav>
  )
}
