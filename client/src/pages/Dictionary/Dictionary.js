import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'

import shuffle from '../../utils/shuffle'

const SENTENCES = gql`
  query Sentences($query: String) {
    sentences(query: $query) {
      id
      english
      korean
      source
      label
      author {
        username
      }
    }
  }
`

export default function Dictionary() {
  const {
    loading,
    data: { sentences }
  } = useQuery(SENTENCES)

  if (loading || !sentences) return <div>Loading...</div>

  return (
    <div>
      <h1>Sendict 문장 DB</h1>
      <ul>
        {shuffle(sentences).map(sen => (
          <li key={sen.id}>
            <div>{sen.english}</div>
            <div>{sen.korean}</div>
            <div>저자: {sen.author.username}</div>
            {sen.source && <div>출처: {sen.source}</div>}
            {sen.label && <div>라벨: {sen.label}</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}
