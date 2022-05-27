const Filling = require('../models/Filling')
const { check, validationResult } = require('express-validator')
const { default: mongoose } = require('mongoose')
const { pathFormater } = require('../helpers')

const CreateFillingCheck = [
  check('name', 'Error on validation name').isString().trim(),
  check('price', 'Error on validation price').isNumeric(),
  check('fillingsType', 'Error on validation fillingsType').isString().trim(),
]

const CreateFilling = async (req, res, next) => {
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

    const existFilling = await Filling.findOne({ name, fillingsType: req.query.category })

    if (existFilling) {
      return res.status(400).json({ message: `Filling ${name} already exist` })
    }
    const filling = await Filling.create({ ...req.body, imageFile })

    return res.status(201).json({ message: `The filling ${name} was created succesfully`, filling })
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` })
  }
}
const GetAllFilling = async (req, res) => {
  try {
    const fillings = await Filling.find({ fillingsType: req.query.category })
    return res.json({ fillings })
  } catch (error) {}
}
module.exports = {
  GetAllFilling,
  CreateFilling,
  CreateFillingCheck,
}
