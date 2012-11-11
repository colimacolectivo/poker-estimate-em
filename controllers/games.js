var inspect   = require('eyes').inspector({ stream: null });
var pivotal   = require("./pivotal");
var ObjectID  = require('mongodb').ObjectID;

module.exports = function(app, db){

  app.post('/api/v1/games/new', function(req, res){
    if(req.user){
      var project_id = parseInt(req.body.project_id, 10);
      var name       = req.body.name;

      if(typeof project_id === "number" && name){
        var data = {
          project_id: project_id,
          name: name
        };

        pivotal.getProyect(req.user.token, project_id,  function(result){
          var Access = result.message  ? false : true; 

          if(Access){
            db.games.find(data, function(err, games){
              games.toArray(function(err, results){
                if(results.length === 0){
                  db.games.save(data, { safe: true }, function(err, game){
                    res.send(game);
                  });
                }else{
                  res.send({message: "Game all ready exists."});
                }
              });
            });
          }else{
            res.send(result);
          }

        });

      }

      if(!name){
        res.send({ error: "Missing name." });
      }

      if(!project_id){
        res.send({ error: "Missing project id." });
      }else if(typeof project_id !== 'number'){
        res.send({ error: "Project id must be number." });
      }

    }else{
      res.send({ error: "Not logged in" });
    }
  });

  app.get('/api/v1/projects/:proId/games', function(req, res){
    if(req.user){
      var project_id = parseInt(req.params.proId, 10);

      if(typeof project_id === "number"){

        pivotal.getProyect(req.user.token, project_id,  function(result){
          var Access = result.message  ? false : true; 

          if(Access){
            db.games.find({project_id: project_id}, function(err, games){
              games.toArray(function(err, results){
                res.send(results);
              });
            });
          }else{
            res.send(result);
          }

        });

      }else{
        res.send({ error: "Project id must be number." });
      }

      if(!project_id){
        res.send({ error: "Missing project id." });
      }

    }else{
      res.send({ error: "Not logged in" });
    }
  });

  app.get('/api/v1/projects/:proId/games/:id', function(req, res){
    if(req.user){
      var project_id = parseInt(req.params.proId, 10);
      var id = req.params.id;
      var objectId = new ObjectID(id);

      if(typeof project_id === "number" && id){

        pivotal.getProyect(req.user.token, project_id,  function(result){
          var Access = result.message  ? false : true; 

          if(Access){
            db.games.find({project_id: project_id, _id: objectId}, function(err, games){
              games.toArray(function(err, results){
                res.send(results);
              });
            });
          }else{
            res.send(result);
          }

        });

      }else{
        res.send({ error: "Project id must be number." });
      }

      if(!project_id){
        res.send({ error: "Missing project id." });
      }

      if(!id){
        res.send({ error: "Missing game id." });
      }

    }else{
      res.send({ error: "Not logged in" });
    }
  });

};
