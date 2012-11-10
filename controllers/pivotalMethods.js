var  pivotal  = require("./controllers/pivotal");

// GET /api/v1/projects
//   [{
//     _id: 0,
//     id: 0,
//     name: "name"
//   }]

module.exports = function(app){
  app.get('/api/v1/projects', function(req, res){
    console.log(req.user);
  });
};
