const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
require('dotenv').config();

const app = express();

app.use(express.static('dist'));
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

if(process.env.NODE_ENV === 'development') {
  app.listen(process.env.PORT);
  console.log(`Listening on ${process.env.PORT}`);
} else {
  https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(process.env.PORT, function () {
    console.log(`Listening on ${process.env.PORT}`)
  });
}
