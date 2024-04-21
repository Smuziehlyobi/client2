import TokenService from "./token.service.js";
import axios from "axios";
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

  async register(username, email, password) {
    return http
      .post("/auth/signup", {
        firstName,
        lastName,
        patronymic,
        repeatPassword,
        password,
        email
      })
      .then(response => {
        return response.data
      })
  }
}

export default new AuthService()
