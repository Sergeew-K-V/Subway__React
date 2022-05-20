const data = require('../data.json')
const express = require('express')
const app = express()
const PORT = 2323

// .env, dotenv
// port, db_name, db_user, db_password

const mongoose = require('mongoose')
const mongoDb = 'mongodb://127.0.0.1:27017/SubwayShop'

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
    app.use('/static', express.static('server/static'))
    /*
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
