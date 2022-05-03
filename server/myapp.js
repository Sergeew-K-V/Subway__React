const data = require('../data.json')

const express = require('express')

const mongoose = require('mongoose')
const mongoDb = 'http://localhost:27017/'
const app = express()
const PORT = 2323

async function startServer() {
  try {
    await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    app.get('/data', (req, res) => {
      res.send(data)
    })

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  } catch (error) {
    console.log('error', error)
    throw new Error(error)
  }
}
startServer()
