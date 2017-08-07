//my requires
var express = require('express');
var path = require('path');
var app = express();

//global variable
var port = process.env.PORT || 8889;

//middleware
app.use(express.static('public'));

//wildcard route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// spin up server listening on 8889
app.listen(port, function() {
  console.log('up 8889');
});
