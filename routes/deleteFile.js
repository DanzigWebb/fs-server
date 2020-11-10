const fs = require('fs')

function deleteFile(req, res) {
  const filePath = req.body.path

  try {
    fs.unlinkSync(filePath)
    res.status(200).send('Файл удален!')
  } catch (e) {
    res.status(404).send('Не удалось удалить файл!')
  }
}

module.exports = deleteFile
