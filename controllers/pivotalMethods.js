var  pivotal  = require("./pivotal");

// GET /api/v1/projects
//   [{
//     _id: 0,
//     id: 0,
//     name: "name"
//   }]

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

};
