const { json } = require('express')
const { check, validationResult } = require('express-validator')
const { default: mongoose } = require('mongoose')
const { pathFormater } = require('../helpers')
const Product = require('../models/Product')

const CreateProductCheck = [
  check('name', 'Error on validation name').isString().trim(),
  check('price', 'Error on validation price').isNumeric(),
  check('description', 'Error on validation description').isString().trim(),
  check('productsType', 'Error on validation productsType').isString().trim(),
]
const CreateProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Wrong data on validation',
      })
    }
    const { name } = req.body
    const imageFile = pathFormater(req.file.path)

    // console.log('imageFile', imageFile)
    // throw new Error()
    const existProduct = await Product.findOne({ name, productsType: req.query.category })

    if (existProduct) {
      return res.status(400).json({ message: `Product ${name} already exist` })
    }
    const product = await Product.create({ ...req.body, imageFile })

    res.status(201).json({ message: `The product ${name} was created succesfully`, product })
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` })
  }
}

const GetAllProduct = async (req, res) => {
  try {
    const products = await Product.find({ productsType: req.query.category })

    return res.json({ products })
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` })
  }
}
module.exports = {
  CreateProduct,
  CreateProductCheck,
  GetAllProduct,
}
