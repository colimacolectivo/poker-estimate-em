var inspect = require('eyes').inspector({ stream: null });
var pivotal = require("./pivotal");

// Simple example to access pivotal
var data = {
  username: "edu.arbo@gmail.com",
  password: "123456"
};

pivotal.access(data, function(result){
  console.log(inspect(result));
});


// Export Home controller
module.exports = function(app) {
 
  app.get('/', function(req, res) {
    res.render('index');
  });

};
