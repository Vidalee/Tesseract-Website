var express = require('express');
var app = express();
app.use(express.static('res'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/res/index.html')
})

app.listen(42042, function () {
  console.log('Tesseract website listening on port 42042!')
})
