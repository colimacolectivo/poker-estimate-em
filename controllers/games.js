var inspect   = require('eyes').inspector({ stream: null });

module.exports = function(app, db){

  app.post('/api/v1/projects/:proId/games/new', function(req, res){
    if(req.user){
      var proId = req.params.proId;
      var name  = req.body.name;

      if(proId && name){
        var data = {
          proyect_id: proId,
          name: name
        };

        db.games.save(data, { safe: true }, function(err, game){
          res.send(game);
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
