const data = require('../data.json')

const express = require('express')
const app = express()
const port = 2323

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/data', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
