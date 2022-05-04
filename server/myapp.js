const data = require('../data.json')
const express = require('express')

const mongoose = require('mongoose')
const schemaOfFillings = require('./models/schemaOfFillings')

const mongoDb = 'mongodb://127.0.0.1:27017/'

const app = express()
const PORT = 2323

async function startServer() {
  try {
    await mongoose.connect(mongoDb)
    // await mongoose.connect(mongoDb, {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
    // })
    let db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))
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
    // throw new Error(error)
  }
}
startServer()
