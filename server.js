const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/screenings', function(req, res){
    var screenings = require('./mock-candidates');
  	res.send(screenings);
});


var port = 8000;
app.listen(port, function() {
  console.log('server listening on port ' + port);
});