import axios from 'axios';

const http = axios.create({
  baseURL: 'http://62.217.179.172:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
