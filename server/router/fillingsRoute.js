const { Router } = require('express')
const router = Router()
const { GetAllFilling, DeleteFilling, CreateFilling } = require('../controllers/FillingsController')

router.get('/fillings', GetAllFilling)
// router.post('/fillings', (req, res) => {})

module.exports = router
