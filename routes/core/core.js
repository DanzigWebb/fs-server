const path = require('path')

class ClientConfig {
  constructor({separator}) {
    this.separator = separator
  }
}

function getConfig(req, res) {
  const config = new ClientConfig({
    separator: path.sep
  })
  res.send(config)
}

module.exports = getConfig
