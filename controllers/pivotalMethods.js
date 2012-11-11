var pivotal   = require("./pivotal");
var inspect   = require('eyes').inspector({ stream: null });

module.exports = function(app, db){

  app.get('/api/v1/projects', function(req, res){

    if(req.user){
      pivotal.getProyects(req.user.token, function(result){
        var projects =  result.projects ?  result.projects.project : [];
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
            res.send(projetsRespond);
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

        res.send(project);
      });
    }else{
      res.send({ error: "Not logged in" });
    }
  });


  var loadTasksonGame = function(storie, callback){
    db.tasks.findOne({id: parseInt(storie.id[0]._, 10)}, function(err, taskOnGame){
      var result = taskOnGame ? null : storie;
      return callback(result);
    });
  };

  var getTaskList = function(stories, Done){
    var i = 0;
    var total = [];
    var end  = stories.length;
    var storiesRespond = [];

    for(i in stories){
      loadTasksonGame(stories[i], function(task, current){
        total.push(1);

        if(task){
          try{

            if(task.estimate[0]._ === "-1"){
              current = {
                title: task.name[0],
                project_id: task.project_id[0]._,
                id: task.id[0]._,
                url: task.url[0],
                description: task.description[0],
                requested_by: task.requested_by[0],
                owned_by: task.owned_by,
                labels: task.labels
              };

              storiesRespond.push(current);
            }

          }catch(err){
            // pivotal issue
          }

        }

        // end statement
        if(end === total.length){
          return Done(storiesRespond);
        }

      });
    }

  };

  app.get('/api/v1/projects/:id/tasks', function(req, res){

    if(req.user){
      var id = req.params.id;
      pivotal.getTasks(req.user.token, id, function(result){
        var errorMessage   = result.message;
        var storiesRespond = [];

        if(errorMessage){
          res.send(result);
        }else{
          var stories = result.stories.story;

          getTaskList(stories,function(respond){
            res.send(respond);
          });

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
        var errorMessage   = result.message;

        if(errorMessage){
          res.send(result);
        }else{
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

          res.send(storieResult);
        }

      });
    }else{
      res.send({ error: "Not logged in" });
    }
  });

};
