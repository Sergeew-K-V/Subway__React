const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schemaOfFillings = new Schema({
  name: String,
  price: Number,
  image: String,
  fillingsType: { type: String, enum: ['Size', 'Bread', 'Vegetables', 'Sauce', 'Fillings'] },
  // Задать всем required: [true, 'Msg on error']?
})

module.exports = mongoose.model('schemaOfFillings', schemaOfFillings)

// https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/mongoose
