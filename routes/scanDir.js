const path = require('path')
const fs = require('fs')
const mime = require('mime')

const junk = require('../junk/junk')
const {FileResponseData} = require('../models/file')
const {FileData} = require('../models/file')

function scanDir(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  const dirPath = req.body.path
  const hasJunk = req.body.hasJunk

  try {
    const dir = fs.readdirSync(dirPath)
    const junked = hasJunk ? dir : dir.filter(junk.not)

    const files = junked.map(file => {
      const filePath = path.resolve(dirPath, file)
      const meta = fs.statSync(filePath)
      const name = file
      const lastModified = meta.mtime
      const size = meta.size
      const extname = path.extname(file)

      let type
      if (extname) {
        type = mime.getType(file)
      } else {
        type = 'folder'
      }

      return new FileData({
        name, lastModified, size, extname, type
      })
    })


    const response = new FileResponseData({
      path: dirPath,
      list: files
    })

    res.send(response)
  } catch (e) {
    res.status(404).send('Не удалось прочесть папку!')
  }
}

module.exports = scanDir
