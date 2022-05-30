const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schemaOfFillings = new Schema({
  name: { type: String, required: [true, 'Error with name in schema create'] },
  price: { type: Number, required: [true, 'Error with price in schema create'], max: 200, min: 0 },
  imageFile: { type: String, required: [false, 'Error with imageFile in schema create'] },
  fillingsType: {
    type: String,
    enum: ['size', 'bread', 'vegetables', 'sauce', 'fillings'],
    required: [true, 'Error with type of fillings in schema create'],
  },
})

module.exports = mongoose.model('Filling', schemaOfFillings)
