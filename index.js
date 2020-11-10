const express = require('express')
const bodyParser = require('body-parser')
const scanDir = require('./routes/scanDir')
const deleteFile = require('./routes/deleteFile')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000

// Routes
app.post('/files', scanDir)
app.delete('/files', deleteFile)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
