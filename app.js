var express = require('express');
// var bodyParser = require('body-parser');
var app = express();
var path = require('path');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

app.use(express.static('public'));

app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/single', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/single.html'));
});

app.listen(1337);
console.log('1337 is the magic port!');
