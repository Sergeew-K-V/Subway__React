const Filling = require('../models/Filling')
const { check, validationResult } = require('express-validator')
const CreateFillingCheck = [
  check('name', 'Error on validation name').isString(),
  check('price', 'Error on validation price').isNumeric(),
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
    const { name, price, type } = req.body
    const existFilling = await Filling.findOne({ name })

    if (existFilling) {
      return res.status(400).json({ message: 'This filling already exist' })
    }
    const filling = new Filling({ name, price, type })

    await filling.save()
    res.status(201).json({ message: 'The filling was created succesfully', filling })
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` })
  }

  // res.json({})- my
  // Filling. - my
  // req.body
  // validation, try-catch
  // const filling = await Filling.create(req.body)
  // return res.send(filling)
}
const DeleteFilling = (req, res) => {}
const GetAllFilling = async (req, res) => {
  console.log('AA')
  const fillings = await Filling.find()
  return res.json({ name: 'Responce', value: 155, fillings })
}
module.exports = { GetAllFilling, DeleteFilling, CreateFilling, CreateFillingCheck }
//https://www.youtube.com/watch?v=ivDjWYcKDZI&t=1s
