const express = require('express');
const fs = require('fs');
const https = require('https');
require('dotenv').config();

const app = express();

app.use(express.static('dist'));
app.use('/', (req, res) => {
  res.sendFile('dist/index.html', {root: __dirname })
});

///if(process.env.NODE_ENV === 'development') {

app.listen(process.env.PORT);
console.log(`Listening on ${process.env.PORT}`);

  /*
} else {
  https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(3000, function () {
    console.log(`Listening on ${process.env.PORT}`)
  });
}
*/
