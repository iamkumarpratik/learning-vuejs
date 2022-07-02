const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({"Status": "success", "data": "ExpressJS Server is Live."})
})

app.listen(5000);
