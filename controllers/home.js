module.exports = function(app) {
 
  app.get('/', function(req, res) {
    res.render('index', { user: req.user, message: req.flash('info') });
  });

  app.get('/login', function(req, res){
    res.render('login', { message: req.flash('error') });
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

};
