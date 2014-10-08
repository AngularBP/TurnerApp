
/**
 * Module dependencies.
 */

var express = require('express');
// var mongoose = require('mongoose');
// var routes = require('./routes');
// var user = require('./routes/user');
var bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');  //https://npmjs.org/package/node-jsonwebtoken
var expressJwt = require('express-jwt'); //https://npmjs.org/package/express-jwt
var http = require('http');
var path = require('path');
var secret = 'needed permissions';

var app = express();
app.set('port', process.env.PORT || 9000);
var server = http.createServer(app);

// We are going to protect /api routes with JWT
app.use('/api/', expressJwt({secret: secret}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../app')));
app.use('/bower_components',express.static(path.join(__dirname, '/../bower_components')));

app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});

app.post('/signIn', function (req, res) {
  //TODO validate req.body.username and req.body.password
  //if is invalid, return 401
  if (!(req.body.email === 'mcchae7@gmail.com' && req.body.password === 'alscjfdl')) {
    res.status(401).send('Wrong user or password');
    return;
  }

  var profile = {
    first_name: 'Neo',
    last_name: 'Chae',
    email: 'mcchae7@gmail.com',
    id: 123
  };

  // We are sending the profile inside the token
  var token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });

  res.json({ token: token });
});

app.get('/api/restricted', function (req, res) {
  console.log('user ' + req.user.email + ' is calling /api/restricted');
  res.json({
    name: 'foo'
  });
});

// all environments
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.methodOverride());
// app.use(app.router);


//console.log(__dirname);

// app.get('/',function(req,res){
//   res.send('test!!!');
// });

// development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

// app.get('/', routes.index);
// app.get('/users', user.list);
// console.log('dddddddddddddfasdfasdfasdfasdfsdf');
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
