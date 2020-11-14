class FileData {
  constructor(params) {
    this.name = params.name
    this.lastModified = params.lastModified
    this.size = params.size
    this.extname = params.extname
    this.type = params.type
  }
}

class FileResponseData {
  constructor(params) {
    this.list = params.list
    this.path = params.path
  }
}

module.exports = {
  FileData, FileResponseData
}
