const express = require('express')
const dotenv = require('dotenv')
const envData = dotenv.config({ path: 'server/.env' })
const app = express()
const PORT = process.env.PORT

if (envData.error) {
  throw envData.error
}

const mongoose = require('mongoose')
const mongoDb = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`

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

    app.use(express.static('server/static'))
    /*
     * GET /fillings
     * GET /fillings/:id
     * POST /fillings
     * PATCH /fillings/:id
     * DELETE /fillings/:id
     *
     */

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })

    app.use((error, req, res, next) => {})
  } catch (error) {}
}

startServer()
