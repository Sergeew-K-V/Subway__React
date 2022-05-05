const Filling = require('../models/Filling')
const CreateFilling = (req, res, next) => {
  try {
    const { name, price, type } = req.body
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
const GetAllFilling = (req, res) => {
  res.json({ name: 'Responce', value: 155 })
}
module.exports = { GetAllFilling, DeleteFilling, CreateFilling }
//https://www.youtube.com/watch?v=ivDjWYcKDZI&t=1s
