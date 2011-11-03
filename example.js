var http = require('http');
var cluster = require('cluster');
var airbrake = require('./lib/cluster-airbrake');

var server = http.createServer(function(req, res){
  throw new Error('failed!');
  console.log('%s %s', req.method, req.url);
  res.end();
});

var proc = cluster(server)
  .use(cluster.debug())
  .use(cluster.stats())
  .use(airbrake('apikey'))
  .listen(3000);