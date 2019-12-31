const axios = require('axios');

const client = axios.create({
  baseURL: 'localhost:8080/v1/',
  timeout: 4000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default client;
