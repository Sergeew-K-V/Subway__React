const Filling = require('../models/Filling')

const { check, validationResult } = require('express-validator')
const { default: mongoose } = require('mongoose')
const CreateFillingCheck = [
  check('name', 'Error on validation name').isString().trim(),
  check('price', 'Error on validation price').isNumeric(),
  // check('image', 'Error on validation image').isString(),
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
    const { name, price, fillingsType } = req.body

    const existFilling = await Filling.findOne({ name })

    if (existFilling) {
      return res.status(400).json({ message: `Filling ${name} already exist` })
    }
    // const filling = new Filling({ name, price, type })
    // await filling.save()
    const filling = await Filling.create(req.body)

    res.status(201).json({ message: `The filling ${name} was created succesfully`, filling })
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` })
  }
}
const DeleteFilling = (req, res) => {}
const GetAllFilling = async (req, res) => {
  const fillings = await Filling.find()
  return res.json({ fillings })
}
module.exports = {
  GetAllFilling,
  DeleteFilling,
  CreateFilling,
  CreateFillingCheck,
}
//https://www.youtube.com/watch?v=ivDjWYcKDZI&t=1s
