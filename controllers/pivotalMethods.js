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
            name: projects[i].name[0],
            id: projects[i].id[0],
            public: projects[i].public[0],
            account: projects[i].account[0]
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

        var project = result.message  ? result : 
          {
            name: result.project.name[0],
            id: result.project.id[0],
            public: result.project.public[0],
            account: result.project.account[0]
          };

        res.send({ project: project });
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
                title: stories[i].name[0],
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

  app.get('/api/v1/projects/:proId/tasks/:strId', function(req, res){

    if(req.user){
      var proId = req.params.proId;
      var strId = req.params.strId;

      pivotal.getTask(req.user.token, proId, strId, function(result){
        var storie = result.story;

        var storieResult = {
          title: storie.name[0],
          project_id: storie.project_id[0]._,
          id: storie.id[0]._,
          url: storie.url[0],
          description: storie.description[0],
          requested_by: storie.requested_by[0],
          owned_by: storie.owned_by,
          labels: storie.labels
        };

        res.send({ task: storieResult });
      });
    }else{
      res.send({ error: "Not logged in" });
    }
  });

};
