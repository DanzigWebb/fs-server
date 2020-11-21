const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
// router handlers
const fakeAuth = require('./routes/auth/fake/auth')
const scanDir = require('./routes/fs/scanDir')
const deleteFile = require('./routes/fs/deleteFile')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.options('*', cors());

const port = 3001

// Routes
// Auth
app.post('/authorization', fakeAuth)
// File system
app.post('/files', scanDir)
app.delete('/files', deleteFile)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
