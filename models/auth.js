class AuthResponse {
  constructor(params) {
    this.token = params.token
    this.userName = params.userName
  }
}

module.exports = {
  AuthResponse
}
