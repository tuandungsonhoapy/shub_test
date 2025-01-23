const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')

const PORT = 8088

app.use(cors())

app.get('/api/download-file', async (req, res) => {
	try {
		const url = 'https://go.microsoft.com/fwlink/?LinkID=521962'
		const response = await axios.get(url, { responseType: 'arraybuffer' })

		res.set({
			'Content-Type':
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			'Content-Disposition':
				'attachment; filename="Financial_Sample.xlsx"'
		})

		res.send(response.data)
	} catch (error) {
		console.error('Error downloading file:', error.message)
		res.status(500).send('Error downloading file')
	}
})

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
