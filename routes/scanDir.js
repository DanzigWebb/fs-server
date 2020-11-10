const path = require('path')
const fs = require('fs')
const {FileResponseData} = require('../models/file')
const {FileData} = require('../models/file')

function scanDir(req, res) {

  const dirPath = req.body.path

  try {
    const dir = fs.readdirSync(dirPath)

    const files = dir.map(file => {
      const filePath = path.resolve(dirPath, file)
      const meta = fs.statSync(filePath)
      const name = file
      const lastModified = meta.mtime
      const size = meta.size
      const extname = path.extname(file)

      return new FileData({
        name, lastModified, size, extname
      })
    })

    const response = new FileResponseData({
      path: dirPath,
      list: files
    })

    res.send(response)
  } catch (e) {
    res.status(404).send('Не удалось прочесть папку!');
  }
}

module.exports = scanDir
