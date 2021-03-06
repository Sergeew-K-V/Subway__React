const express = require('express')
const dotenv = require('dotenv')
const envData = dotenv.config({ path: 'server/.env' })
const app = express()
const PORT = process.env.PORT

if (envData.error) {
  throw envData.error
}

const mongoose = require('mongoose')
const mongoDb = process.env.DB_HTTP + '://' + process.env.DB_PORT + '/' + process.env.DB_NAME

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

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })

    app.use((error, req, res, next) => {
      throw new Error(error)
    })
  } catch (error) {}
}

startServer()
