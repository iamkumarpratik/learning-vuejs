const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200)
  res.json({data: "The EXPRESS JS Server is live!", status: "success"})
})

module.exports = router
