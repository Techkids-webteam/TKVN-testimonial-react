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

//mad

app.get('/hoang-duong', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/mad-author1.html'));
});

app.get('/duc-nhan', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/mad-author2.html'));
});

app.get('/tran-trung', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/mad-author3.html'));
});

app.get('/duong-thang', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/mad-author4.html'));
});

//web

app.get('/hoang-duong', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/web-author1.html'));
});

app.get('/duc-nhan', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/web-author2.html'));
});

app.get('/tran-trung', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/web-author3.html'));
});

app.get('/duong-thang', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/web-author4.html'));
});

// c4e

app.get('/chau-duong', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/c4e-author1.html'));
});

app.get('/minh-tien', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/c4e-author2.html'));
});

app.get('/phuong-thao', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/c4e-author3.html'));
});

app.get('/nguyen-mai', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/author/c4e-author4.html'));
});



app.listen(1337);
console.log('1337 is the magic port!');
