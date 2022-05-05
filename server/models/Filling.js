const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schemaOfFillings = new Schema({
  name: { type: String, required: [true, 'Error with name in schema create'] },
  price: { type: Number, required: [true, 'Error with price in schema create'], max: 100 },
  image: { type: String, required: [true, 'Error with image in schema create'] },
  fillingsType: {
    type: String,
    enum: ['Size', 'Bread', 'Vegetables', 'Sauce', 'Fillings'],
    required: [true, 'Error with type of fillings in schema create'],
  },
  // Задать всем required: [true, 'Msg on error']?
})

module.exports = mongoose.model('Filling', schemaOfFillings)

// https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/mongoose
