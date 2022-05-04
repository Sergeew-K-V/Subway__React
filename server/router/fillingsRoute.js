const { Router } = require('express')
const router = Router()
router.get('/hello', function (req, res) {
  res.send('responce with a resource')
})

module.exports = router
