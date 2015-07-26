var express = require('express');
var user    = require('./user');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('This is Johnny\n');
});

app.get('/user/add', function (req, res) {
	var loginname = req.query.loginname;
  user.saveUser(loginname, loginname, "password", function (err, data){ 
  		res.send(data);
  });
});

app.get('/user/find', function (req, res) {
  var loginname = req.query.loginname;
  user.getUserByLoginName(loginname, function (err, data){ 
  		res.send(data);
  });
});



app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
