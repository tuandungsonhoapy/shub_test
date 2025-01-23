/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import axios from 'axios'
import * as XLSX from 'xlsx'
import { Button } from 'antd'
import './Task1.scss'

const Task1 = () => {
  const [data, setData] = useState<any>([])
  const [titleList, setTitleList] = useState<any>([])

  const renderTableHeader = () => {
    return titleList.map((title: string, index: number) => {
      return <th key={index}>{title}</th>
    })
  }

  const renderData = () => {
    return data.map((row: any, rowIndex: number) => {
      return (
        <tr key={rowIndex}>
          <td>{rowIndex + 1}</td>
          {row.map((cell: any, cellIndex: number) => {
            return <td key={cellIndex}>{cell}</td>
          })}
        </tr>
      )
    })
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8088/api/download-file',
        {
          responseType: 'arraybuffer'
        }
      )

      processExcelData(response.data)
    } catch (error) {
      console.error('Error fetching file from main server:', error)

      try {
        const proxyURL =
					'https://cors-anywhere.herokuapp.com/https://go.microsoft.com/fwlink/?LinkID=521962'
        const proxyResponse = await axios.get(proxyURL, {
          responseType: 'arraybuffer'
        })

        processExcelData(proxyResponse.data)
      } catch (proxyError) {
        console.error(
          'Error fetching file from proxy server:',
          proxyError
        )
        alert('Unable to fetch data from both main server and proxy.')
      }
    }
  }

  const processExcelData = (data: ArrayBuffer) => {
    const workbook = XLSX.read(data, { type: 'buffer' })

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]

    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1
    })

    const titleList = jsonData[0]
    const dataRows = jsonData.slice(1)

    setTitleList(titleList)
    setData(dataRows)
  }

  const exportData = () => {
    const trimmedTitleList = titleList.map((title: string) => title.trim())

    const salesIndex = trimmedTitleList.indexOf('Sales')

    if (salesIndex === -1) {
      alert('Sales column not found')
      return
    }

    const filteredData = data.filter((row: any) => row[salesIndex] > 50000)

    const newSheet = XLSX.utils.aoa_to_sheet([titleList, ...filteredData])

    const newWorkbook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Filtered Data')

    XLSX.writeFile(newWorkbook, 'filtered_data.xlsx')
  }

  return (
    <div className="container task1_content_container">
      <div>
        <Button onClick={fetchData}>Import data</Button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              {titleList.length > 0 && <th>STT</th>}
              {renderTableHeader()}
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
      <div><Button onClick={exportData}>Export data</Button></div>
    </div>
  )
}

export default Task1
