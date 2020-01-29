const axios = require('axios');
const apiUrl = process.env.API_URL;


const client = axios.create({
  baseURL: apiUrl,
  timeout: 4000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default client;
