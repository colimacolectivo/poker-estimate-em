var https       = require('https');
var inspect     = require('eyes').inspector({ stream: null });
var querystring = require('querystring');
var xml2js      = require('xml2js');

var parser = new xml2js.Parser();
var denied = new RegExp("Access denied.");

module.exports.access = function(data, callback){

  var stringData = querystring.stringify(data);

  var options = {
    host: 'www.pivotaltracker.com',
    port: 443,
    path: '/services/v3/tokens/active',
    method: 'POST',
    headers: {  
      'Content-Type': 'application/x-www-form-urlencoded',  
      'Content-Length': stringData.length  
    }  
  };

  var req = https.request(options, function(res) {
    res.on('data', function(d) {
      var access = !denied.test(d.toString());

      if(access){
        parser.parseString(d, function (err, result) {
          return callback.call(this, result);
        });
      }else{
        return callback.call(this, "Access denied.");
      }

    });

  });

  req.write(stringData);
  req.end();

  req.on('error', function(e) {
    console.error(e);
  });

};
