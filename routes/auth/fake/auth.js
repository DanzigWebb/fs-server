const users = require('./users')
const {AuthResponse} = require('../../../models/auth')

function fakeAuth(req, res) {
  const {userName, password} = req.body

  const isHasName = users[userName]

  if (!isHasName || isHasName !== password) {
    res.status(404).send('Неверный логин или пароль')
  } else {
    res.status(200).send(new AuthResponse({
      token: 'fake-token',
      userName
    }))
  }
}

module.exports = fakeAuth
