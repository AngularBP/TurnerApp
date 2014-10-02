var express = require('express');
var bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');  //https://npmjs.org/package/node-jsonwebtoken
var expressJwt = require('express-jwt'); //https://npmjs.org/package/express-jwt


var secret = 'this is the secret secret secret 12356';

var app = express();

// We are going to protect /api routes with JWT
app.use('/api', expressJwt({secret: secret}));

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../../..'));

// All other routes should redirect to the index.html
app.route('/*')
  .get(function(req, res) {
    res.sendfile('/../../../app/index.html');
  });

app.set('appPath', 'app');

app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});

app.post('/api/signIn', function (req, res) {
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
    id: 1
  };

  // We are sending the profile inside the token
  var token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });

  res.json({ 
    token: token,
    success: true
  });
});

app.get('/api/restricted', function (req, res) {
  console.log('user ' + req.user.email + ' is calling /api/restricted');
  res.json({
    name: 'foo'
  });
});

app.listen(8080, function () {
  console.log('listening on http://localhost:8080');
});