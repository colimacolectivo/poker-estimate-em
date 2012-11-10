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

  app.get('/api/v1/projects/:id/tasks', function(req, res){

    if(req.user){
      var id = req.params.id;
      pivotal.getTasks(req.user.token, id, function(result){
        var stories = result.stories.story;
        var total = stories.length;
        var i = 0;
        var storiesRespond = [];
        var current = {};

        for(i; i<total; i++){

          try{ 
            if(stories[i].estimate[0]._ === "-1"){
              current = {
                title: stories[i].name,
                project_id: stories[i].project_id[0]._,
                id: stories[i].id[0]._,
                url: stories[i].url[0],
                description: stories[i].description[0],
                requested_by: stories[i].requested_by[0],
                owned_by: stories[i].owned_by,
                labels: stories[i].labels
              };
              storiesRespond.push(current);
            }
          }catch(err){
            console.log(err);
          }

          if(i === total - 1){
            res.send({ tasks: storiesRespond });
          }
        }

      });
    }else{
      res.send({ error: "Not logged in" });
    }
  });

};
