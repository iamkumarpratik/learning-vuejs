const express = require('express')
const mongoose = require('mongoose')
require("dotenv/config")
const bodyParser = require('body-parser')
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8000', 
}

const app = express()
app.use(cors(corsOptions));
const checkStatus = require("./api/status")
const createSurveyResponse = require("./api/survey_api")

app.use(bodyParser.json())
app.use(checkStatus)
app.use('/survey', createSurveyResponse)

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("DB Connection Established.");
})

app.listen(5000);
