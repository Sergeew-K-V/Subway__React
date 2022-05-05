const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schemaOfFillings = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  fillingsType: {
    type: String,
    enum: ['Size', 'Bread', 'Vegetables', 'Sauce', 'Fillings'],
    required: true,
  },
  // Задать всем required: [true, 'Msg on error']?
})

module.exports = mongoose.model('Filling', schemaOfFillings)

// https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/mongoose
