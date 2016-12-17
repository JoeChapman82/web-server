var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

//middleware for every page (place before all routes)
app.use(middleware.logger);

//middleware just for one page
app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('Express server started on port ' + PORT);
});

// __dirname is full path of directory
