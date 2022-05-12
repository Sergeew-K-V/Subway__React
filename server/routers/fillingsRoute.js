const express = require('express')
const router = express.Router()

const {
  GetAllFilling,
  DeleteFilling,
  CreateFilling,
  CreateFillingCheck,
} = require('../controllers/FillingsController')

// router.post('/products',)
router.get('/fillings', GetAllFilling)
router.post('/fillings', CreateFillingCheck, CreateFilling)

module.exports = router
