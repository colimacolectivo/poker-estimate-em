var https       = require('https');
var http        = require('http');
var inspect     = require('eyes').inspector({ stream: null });
var querystring = require('querystring');
var xml2js      = require('xml2js');

var parser = new xml2js.Parser();
var denied = new RegExp("Access denied.");

// Access
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

// get Proyects
module.exports.getProyects = function(token){

  var options = {
    host: 'www.pivotaltracker.com',
    port: 443,
    path: '/services/v3/projects',
    method: 'GET',
    headers: {  
      'Content-Type': 'application/x-www-form-urlencoded',  
      'Content-Length': token.length  
    }  
  };

  var req = http.request(options, function(res) {
    res.on('data', function(d) {
      parser.parseString(d, function (err, result) {
        console.log(result);
        // return callback.call(this, result);
      });
    });

  });

  req.write(token);
  req.end();

  req.on('error', function(e) {
    console.error(e);
  });

};
