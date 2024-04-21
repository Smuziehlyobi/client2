import TokenService from "./token.service.js";
import http from "./http.js";

class AuthService {
  async login(username, password) {
    return http
      .post("/auth/signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data)
        }

        return response.data
      })
  }

  logout() {
    TokenService.removeUser()
  }

  async register({firstName,
                   lastName,
                   patronymic,
                   repeatPassword,
                   password,
                   email}) {
    return http
      .post("/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        patronymic: patronymic,
        repeatPassword: repeatPassword,
        password: password,
        email: email
      })
      .then(response => {
        if (response.data.accessToken) {
          TokenService.setUser({
            accessToken : response.data.accessToken,
            refreshToken : response.data.refreshToken,
          })
        }

        return response.data
      })
  }
}

export default new AuthService()
