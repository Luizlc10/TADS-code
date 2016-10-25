var rpc = require('node-json-rpc');

var options = {
  // int port of rpc server, default 5080 for http or 5433 for https
  port: 5080,
  // string domain name or ip of rpc server, default '127.0.0.1'
  host: '127.0.0.1',
  // string with default path, default '/'
  path: '/',
  // boolean false to turn rpc checks off, default true
  strict: true
};

// Create a server object with options
var serv = new rpc.Server(options);

serv.addMethod('soma', function (para, callback) {
  var error, result;

  if (para.length === 2) result = para[0] + para[1];
  else error = { code: -32602, message: "Invalid params" };

  callback(error, result);
});

serv.addMethod('subtracao', function (para, callback) {
  var error, result;

  if (para.length === 2) result = para[0] - para[1];
  else error = { code: -32602, message: "Invalid params" };

  callback(error, result);
});

serv.addMethod('multiplicacao', function (para, callback) {
  var error, result;

  if (para.length === 2) result = para[0] * para[1];
  else error = { code: -32602, message: "Invalid params" };

  callback(error, result);
});

serv.addMethod('divisao', function (para, callback) {
  var error, result;

  if (para.length === 2) result = para[0] / para[1];
  else error = { code: -32602, message: "Invalid params" };

  callback(error, result);
});
// Start the server
serv.start(function (error) {
  // Did server start succeed ?
  if (error) throw error;
  else console.log('Server running ...');
});
