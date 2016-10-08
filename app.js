var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('user.js'));

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
