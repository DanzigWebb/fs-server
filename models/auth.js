class AuthResponse {
  constructor(params) {
    this.token = params.token
    this.login = params.login
    this.role = params.role
  }
}

module.exports = {
  AuthResponse
}
