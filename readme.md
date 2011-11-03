## cluster-airbrake
Exception notification through the Airbrake service. (http://airbrakeapp.com)

## Installation
    $ npm install cluster-airbrake

## Usage
Initialize cluster-airbrake with your Airbrake API key.

## Example

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


## Credits
  * Node Airbrake notifier: Felixge's node-airbrake (https://github.com/felixge/node-airbrake)
  * Worker management inside exception handling: 3rd-eden's cluster.exception (https://github.com/3rd-eden/cluster.exception)
    
## License
Copyright (c) 2011 Jason Barry <jay@jcbarry.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.