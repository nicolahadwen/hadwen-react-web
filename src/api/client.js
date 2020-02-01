const axios = require('axios');

const client = axios.create({
  baseURL: process.env.API_URL,
  headers: {'X-Correlation-Id': 'xyz'}
});

export default client;
