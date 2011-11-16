var ab = require('airbrake');

exports.version = '0.0.2';
exports = module.exports = function airbrake (apikey, options) {
  var options = options || {};
  var client = ab.createClient(apikey);

  function airbrake (instance) {
    if(options.serverNotifier) {
      instance.server.airbrakeNotify = function(msg) {
        notifier(msg)
      }
    }

    if (!instance.isWorker) {
      instance.on('worker exception', function(worker, err){
        notifier(err);
      });
    }
  };

  function notifier(err) {
    client.notify(err, function(notifyErr, url) {
      if (notifyErr) {
        console.error('Airbrake: Could not notify service.');
        console.error(notifyErr.stack);
      } else {
        console.error('Airbrake: Notified service: ' + url);
      }
    });
  }

  airbrake.enableInWorker = true;
  return airbrake;
};