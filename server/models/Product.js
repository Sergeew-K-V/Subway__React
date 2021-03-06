const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schemaOfProducts = new Schema({
  name: { type: String, required: [true, 'Error with name in schema create'] },
  description: { type: String, required: [true, 'Error with description in schema create'] },
  price: { type: Number, required: [true, 'Error with price in schema create'], max: 500, min: 0 },
  imageFile: { type: String, required: [true, 'Error with image in schema create'] },
  productsType: {
    type: String,
    enum: ['sandwich', 'pizza', 'burger', 'shaurma', 'chicken', 'salads', 'drinks'],
    required: [true, 'Error with type of fillings in schema create'],
  },
})

module.exports = mongoose.model('Product', schemaOfProducts)
