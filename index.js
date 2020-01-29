const express = require('express');
const path = require('path');

const app = express();

const publicFolder = path.join(__dirname, '../dist');

app.use(express.static('dist'));
app.use('/', (req, res) => {
  const filePath = path.join(publicFolder, 'index.html');
  res.sendFile('dist/index.html', {root: __dirname })
});

app.listen(3000);
