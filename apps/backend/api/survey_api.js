const express = require('express')

const router = express.Router()

const responseSchemaTable = require('../model/survey_schema')

router.post('/create', async(req, res) => {

  const responseDetails =  responseSchemaTable({
    full_name: req.body.name,
    email_address: req.body.email,
    phone_number: req.body.mobile,
    occupation: req.body.occupation,
    favourite_tech: req.body.favourite_tech,
    years_of_exp: req.body.years_of_exp,
    organization: req.body.organization,
  })
  try {
    const saveResponse = await responseDetails.save()
    res.statusCode = 201
    res.json({status:"success", data: saveResponse })
  }
  catch (err)  {
    res.statusCode = 500
    res.json({status: "Error", data: err})
  }
})

module.exports = router
