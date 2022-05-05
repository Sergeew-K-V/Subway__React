const data = require('../data.json')
const express = require('express')

const mongoose = require('mongoose')
const mongoDb = 'mongodb://127.0.0.1:27017/'
const { CreateFilling } = require('./controllers/FillingsController')
const app = express()
const PORT = 2323

const fillingsRouter = require('./routers/fillingsRoute')

async function startServer() {
  try {
    // await mongoose.connect(mongoDb, {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
    // })
    await mongoose.connect(mongoDb)
    let db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    app.get('/data', (req, res) => {
      res.send(data)
    })
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    app.use(fillingsRouter)
    // app.post('/fillings', CreateFilling)
    // app.get('/fillings')
    // restful

    /**
     * GET /fillings
     * GET /fillings/:id
     * POST /fillings
     * PATCH /fillings/:id
     * DELETE /fillings/:id
     */

    // MVC

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  } catch (error) {
    console.log('error', error)
    // throw new Error(error)
  }
}

startServer()
