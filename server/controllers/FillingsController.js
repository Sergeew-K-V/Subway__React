const Filling = require('../models/Filling')
const CreateFilling = (req, res, next) => {
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
