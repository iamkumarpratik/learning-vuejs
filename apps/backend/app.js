const express = require('express')
const mongoose = require('mongoose')
require("dotenv/config")
const bodyParser = require('body-parser')
const app = express()

const checkStatus = require("./api/status")

app.use(bodyParser.json())
app.use(checkStatus)

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("DB Connection Established.");
})

app.listen(5000);
