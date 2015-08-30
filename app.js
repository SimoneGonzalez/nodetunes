var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var artist = require('./routes/artist');
var artists = require('./routes/artists');
var album = require('./routes/album');


var app = express();

require('./lib/secrets');
require('./lib/mongodb');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);
app.use('/artist', artist);
app.use('/artists', artists);
app.use('/album', album);

app.use(express.static('www'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});