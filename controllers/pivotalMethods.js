var  pivotal  = require("./pivotal");
var inspect   = require('eyes').inspector({ stream: null });

module.exports = function(app){

  app.get('/api/v1/projects', function(req, res){

    if(req.user){
      pivotal.getProyects(req.user.token, function(result){
        var projects = result.projects.project;
        var total = projects.length;
        var i = 0;
        var projetsRespond = [];

        for(i; i<total; i++){
          projetsRespond[i] = {
            name: projects[i].name,
            id: projects[i].id
          };

          if(i === total - 1){
            res.send({ proyects: projetsRespond });
          }
        }

      });
    }else{
      res.send({ error: "Not logged in" });
    }
  });

  app.get('/api/v1/projects/:id', function(req, res){

    if(req.user){
      var id = req.params.id;
      pivotal.getProyect(req.user.token, id,  function(result){
        var project = {
          name: result.project.name,
          id: result.project.id
        };

        res.send({ proyect: project });
      });
    }else{
      res.send({ error: "Not logged in" });
    }
  });

};
