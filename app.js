const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Danni!')
})

app.get('/news', function (req, res) {
  res.send('Hello Donald Trump!')
})

app.listen(3000);
