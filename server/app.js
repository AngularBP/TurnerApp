
/**
 * Module dependencies.
 */

var express = require('express');
// var mongoose = require('mongoose');
// var routes = require('./routes');
// var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 9000);
var server = http.createServer(app);

// all environments
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.methodOverride());
// app.use(app.router);
app.use(express.static(path.join(__dirname, '/../app')));
app.use('/bower_components',express.static(path.join(__dirname, '/../bower_components')));

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
