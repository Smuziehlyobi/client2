import {baseApi} from "./base.js";
import http from "../services/http.js";

const postPayment = (body) => {
  return new Promise((resolve, reject) => {
    http
      .post(`${baseApi}cards/payment`, body)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { postPayment };
