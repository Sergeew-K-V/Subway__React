const express = require('express')
const router = express.Router()
const {
  GetAllFilling,
  CreateFilling,
  CreateFillingCheck,
} = require('../controllers/FillingsController')

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

router.get('/fillings', GetAllFilling)
router.post('/fillings', upload.single('imageFile'), CreateFillingCheck, CreateFilling)

module.exports = router
