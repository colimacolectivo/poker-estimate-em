var mongodb = require('mongodb');

var host = "127.0.0.1";
var port = 27017;
var options = {};

var server = new mongodb.Server(host, port, options, {native_parser: true});
var Database = new mongodb.Db("Texas", server, {});

exports.close = function(){
  Database.close();
};

exports.init = function(callback){

  Database.open(function(error, db){

    if(error){
      throw error;
    }

    var collections = {
      users: new mongodb.Collection(db, "users")
    };

    return callback.call(this, collections);


  });

};
