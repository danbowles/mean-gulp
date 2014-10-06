// Pull in what is required
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// TODO logger, favicon, etc

// Configure Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded()); // TODO needed?

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send("works!");
});

// Load Configs
var serverConfig = require('./config/server');
var databaseConfig = require('./config/database');

// connect DB
mongoose.connect(databaseConfig.url());

// Start server
app.listen(serverConfig.port, serverConfig.address, function() {
  console.log('Server started');
});