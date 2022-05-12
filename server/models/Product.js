const mongoose = require('mongoose')

const Schema = new mongoose.Schema()

const schemaOfProducts = new Schema({
  name: { type: String, required: [true, 'Error with name in schema create'] },
  description: { type: String, required: [true, 'Error with description in schema create'] },
  quantity: { type: Number, required: [false, 'Error with descripiton'] },
  price: { type: Number, required: [true, 'Error with price in schema create'], max: 400, min: 0 },
  image: { type: String, required: [true, 'Error with image in schema create'] },
  productsType: {
    type: String,
    enum: ['Subway', 'Pizza', 'Burger', 'Shaurma', 'Chiken', 'Salads', 'Drinks'],
    required: [true, 'Error with type of fillings in schema create'],
  },
})

module.exports = mongoose.model('Product', schemaOfProducts)
