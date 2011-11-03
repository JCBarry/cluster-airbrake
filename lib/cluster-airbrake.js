var ab = require('airbrake');

exports.version = '0.0.1';
exports = module.exports = function airbrake (apikey) {
  var client = ab.createClient(apikey);

  function airbrake (instance) {
    if (!instance.isWorker) {
      instance.on('worker exception', function(worker, err){
        client.notify(err, function(notifyErr, url) {
          if (notifyErr) {
            console.error('Airbrake: Could not notify service.');
            console.error(notifyErr.stack);
          } else {
            console.error('Airbrake: Notified service: ' + url);
          }
        });
      });
    }
  };

  airbrake.enableInWorker = true;
  return airbrake;
};