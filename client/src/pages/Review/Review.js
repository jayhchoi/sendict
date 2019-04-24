import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'

const MY_DICTIONARY = gql`
  query MyDictionary {
    myDictionary {
      sentences {
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
  }
`

export default function Review() {
  const {
    data: { myDictionary }
  } = useQuery(MY_DICTIONARY, { fetchPolicy: 'cache-and-network' }) // Cache first, and then network -> no need of loading?

  if (!myDictionary) return <div>Loading...</div>
  if (myDictionary.length === 0) return <div>문장 학습을 시작하세요</div>

  return (
    <div>
      <h1>내 문장 사전</h1>
      <ul>
        {myDictionary.sentences.map(sen => (
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
