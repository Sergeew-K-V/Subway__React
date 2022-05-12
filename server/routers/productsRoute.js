const express = require('express')
const router = express.Router()
const {
  CreateProduct,
  CreateProductCheck,
  GetAllProduct,
} = require('../controllers/ProductsController')

router.post('/products', CreateProductCheck, CreateProduct)
router.get('/', GetAllProduct)
module.exports = router
