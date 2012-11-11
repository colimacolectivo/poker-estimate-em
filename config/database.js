var mongodb = require('mongodb');

var host = "alex.mongohq.com";
var port = 10016;
var options = {};

var server = new mongodb.Server(host, port, options, {native_parser: true});
var Database = new mongodb.Db("TexasEstimateEm", server, {safe: false});

exports.close = function(){
  Database.close();
};

exports.init = function(callback){

  Database.open(function(error, db){

    db.authenticate('narciso', 'guillen', function (err, replies) {
      console.log(replies);
      // We are now connected and authenticated.
    });

    if(error){
      throw error;
    }

    var collections = {
      users: new mongodb.Collection(db, "users"),
      games: new mongodb.Collection(db, "games"),
      tasks: new mongodb.Collection(db, "tasks")
    };

    return callback.call(this, collections);


  });

};
