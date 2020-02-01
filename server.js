const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
require('dotenv').config();

const app = express();

const createHttpConfig = () => {
  try {
    return {
      key: fs.readFileSync('/etc/https-certs/key.pem'),
      cert: fs.readFileSync('/etc/https-certs/cert.pem')
    };
  } catch (e) {
    console.info('the error: ', e);
  }
};

app.use(express.static('dist'));
app.use('/', (req, res) => {
  console.log('sending file');
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

if(process.env.NODE_ENV === 'development') {
  app.listen(process.env.PORT);
  console.log(`Listening on ${process.env.PORT}`);
} else {
  console.log('httpsOptions: ', createHttpConfig());
  console.info('HTTPS RUN: ', process.env.PORT);
  https.createServer(createHttpConfig(), app).listen(process.env.PORT);
}

