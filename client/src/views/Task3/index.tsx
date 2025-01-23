/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Button } from 'antd'
import './Task3.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Task3 = () => {
  const [result, setResult] = useState<Array<number>>([])
  const [token, setToken] = useState('')

  const fetchData = async () => {
    try {
      const inputResponse = await axios.get(
        'https://share.shub.edu.vn/api/intern-test/input'
      )
      const { token, data, query } = inputResponse.data

      const result = query.map(
        ({ type, range }: { type: any; range: any }) => {
          const [l, r] = range
          if (type == '1') {
            return data
              .slice(l, r + 1)
              .reduce((sum: number, num: number) => sum + num, 0)
          } else if (type == '2') {
            let evenSum = 0
            let oddSum = 0
            for (let i = l; i <= r; i++) {
              if ((i - l) % 2 === 0) {
                evenSum += data[i]
              } else {
                oddSum += data[i]
              }
            }
            return evenSum - oddSum
          }
          return 0
        }
      )

      setResult(result)
      setToken(token)
    } catch (error) {
      console.error('error:', error)
    }
  }

  const sendRequest = () => {
    try {
      axios.post(
        'https://share.shub.edu.vn/api/intern-test/output',
        result,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then(() => console.log('Success'))
    } catch (error) {
      console.error('error:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container task3_content_container">
      <div>
        <Button onClick={sendRequest}>Send request</Button>
      </div>
    </div>
  )
}

export default Task3
