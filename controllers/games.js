var inspect   = require('eyes').inspector({ stream: null });

module.exports = function(app, db){

  app.post('/api/v1/projects/:proId/games/new', function(req, res){
    if(req.user){
      var proId = parseInt(req.params.proId, 10);
      var name  = req.body.name;

      if(typeof proId === "number" && name){
        var data = {
          project_id: proId,
          name: name
        };

        db.games.find({project_id: proId, name: name}, function(err, games){
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

      }

      if(!name){
        res.send({ error: "Missing name" });
      }

      if(!proId){
        res.send({ error: "Missing project id" });
      }

    }else{
      res.send({ error: "Not logged in" });
    }
  });

};
