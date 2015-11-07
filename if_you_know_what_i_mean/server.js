var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var db = require('./config/db');
var http = require('http').Server(app);

var port = process.env.PORT || 8080;

mongoose.connect(db.url);

app.use(bodyParser.json()); 

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(express.static(__dirname + '/public')); 

require('./app/routes')(app); // configure our routes

app.listen(port); 

console.log('Mágica acontecendo na porta:  ' + port);

exports = module.exports = app;

