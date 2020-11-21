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
    this.list = FileResponseData.sort(params.list)
    this.path = params.path
  }

  static sort(list) {
    const folders = list.filter(file => file.type === 'folder')
    const withoutFolders = list.filter(file => !(file.type === 'folder'))
    return [...folders, ...withoutFolders]
  }
}

module.exports = {
  FileData, FileResponseData
}
