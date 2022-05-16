const express = require('express')
const router = express.Router()
const {
  CreateProduct,
  CreateProductCheck,
  GetAllProduct,
} = require('../controllers/ProductsController')

const multer = require('multer')
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './server/static')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname)
  },
})
const upload = multer({ storage: fileStorage })

router.post('/products', upload.single('imageFile'), CreateProductCheck, CreateProduct)
router.get('/products', GetAllProduct)
module.exports = router
