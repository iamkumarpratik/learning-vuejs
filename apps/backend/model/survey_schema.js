const mongoose = require('mongoose')

const UserResponseSchema = mongoose.Schema({
  full_name : {
    type: String,
    required: true
  },
  email_address: {
    type: String,
    required: true
  },
  phone_number: {
    type: Number
  },
  occupation: {
    type: String,
    required: true
  },
  favourite_tech: {
    type: String
  },
  years_of_exp: {
    type: Number
  },
  organization: {
    type: String
  }
})

module.exports = mongoose.model("UserData", UserResponseSchema)
