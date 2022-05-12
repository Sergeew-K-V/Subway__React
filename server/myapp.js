const data = require('../data.json')
const express = require('express')

const mongoose = require('mongoose')
const mongoDb = 'mongodb://127.0.0.1:27017/SubwayShop'
const app = express()
const PORT = 2323
const path = '/Users/darya/Desktop/Kirill/Subway__React/src/img/icons'
const fillingsRouter = require('./routers/fillingsRoute')
const productsRouter = require('./routers/productsRoute')

async function startServer() {
  try {
    await mongoose.connect(mongoDb)
    let db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))

    app.use(express.json({ extended: true }))
    app.use(express.urlencoded({ extended: false }))
    app.use(fillingsRouter)
    app.use(productsRouter)
    app.use(express.static(path))
    /**
     * GET /fillings
     * GET /fillings/:id
     * POST /fillings
     * PATCH /fillings/:id
     * DELETE /fillings/:id
     */

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  } catch (error) {}
}

startServer()
