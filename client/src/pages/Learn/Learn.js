import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'
import { toast } from 'react-toastify'
import useInput from '../../hooks/useInput'

const CREATE_SENTENCE = gql`
  mutation createSentence($data: CreateSentenceInput!) {
    createSentence(data: $data) {
      id
    }
  }
`

export default function Learn() {
  const englishInput = useInput('')
  const koreanInput = useInput('')
  const [sentences, setSentences] = useState([])
  const createSentenceMutation = useMutation(CREATE_SENTENCE)

  const saveSentence = async () => {
    try {
      if (!englishInput.value || !koreanInput.value)
        throw new Error('영어와 우리말 문장을 입력한 뒤 저장해주세요')

      await createSentenceMutation({
        variables: {
          data: {
            english: englishInput.value,
            korean: koreanInput.value
          }
        }
      })
      setSentences([
        ...sentences,
        {
          english: englishInput.value,
          korean: koreanInput.value
        }
      ])
      englishInput.reset()
      koreanInput.reset()
      toast.success('입력한 문장을 DB에 저장했습니다')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      <h1>문장 학습하기</h1>
      <p>
        영어 컨텐츠를 소비하면서 접하는 새롭거나 유용한 문장들을 빠르게
        저장하세요. 저장된 문장들은 '복습하기' 페이지에서 모두 확인할 수
        있습니다
      </p>

      <input
        type="text"
        placeholder="영어 문장을 입력하세요"
        name="english"
        value={englishInput.value}
        onChange={englishInput.onChange}
      />
      <input
        type="text"
        placeholder="우리말 뜻을 입력하세요"
        name="korean"
        value={koreanInput.value}
        onChange={koreanInput.onChange}
      />
      <button onClick={saveSentence}>저장</button>

      <ul>
        {sentences.map((sen, index) => (
          <li key={index}>
            <div>{sen.english}</div>
            <div>{sen.korean}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
