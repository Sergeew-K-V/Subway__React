const { check, validationResult } = require('express-validator')
const { default: mongoose } = require('mongoose')

const Product = require('../models/Product')

const CreateProductCheck = [
  check('name', 'Error on validation name').isString().trim(),
  check('price', 'Error on validation price').isNumeric(),
  check('description', 'Error on validation description').isString().trim(),
  // check('image', 'Error on validation image').isString(),
  check('productsType', 'Error on validation productsType').isString().trim(),
]
const GetAllProduct = async (req, res) => {
  const products = await Product.find()
  return res.json({ products })
}
const CreateProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Wrong data on validation',
      })
    }
    const {
      name,
      price,
      description,
      //  image,
      productsType,
    } = req.body

    const existProduct = await Product.findOne({ name })

    if (existProduct) {
      return res.status(400).json({ message: `Product ${name} already exist` })
    }
    const product = await Product.create(req.body)

    res.status(201).json({ message: `The product ${name} was created succesfully`, product })
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` })
  }
}

module.exports = {
  CreateProduct,
  CreateProductCheck,
  GetAllProduct,
}
