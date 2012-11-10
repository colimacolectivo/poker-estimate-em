var express = require('express')
  , http = require('http')
  , path = require('path')
  , database = require("./config/database")
  , pivotal  = require("./controllers/pivotal")
  , inspect  = require('eyes').inspector({ stream: null })
  , flash = require('connect-flash');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var app = express();

database.init(function(db){

  var findById = function(id, fn) {
    db.users.findOne({id: id}, function(err, user){
      if(user){
        fn(null, user);
      }else{
        fn(new Error('User ' + id + ' does not exist'));
      }
    });
  };

  var findByUsername = function(username, fn) {
    db.users.findOne({username: username}, function(err, user){
      return fn(null, user);
    });
  };


  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      process.nextTick(function () {
        findByUsername(username, function(err, user) {
          if (err) { return done(err); }

          if (!user) { 
            pivotal.access({username: username, password: password}, function(result){
              if(typeof result === 'object'){
                var guid = result.token.guid[0];
                var id   = result.token.id[0]._;
                db.users.save({id: id, email: username, password: password, token: guid}, { safe: true }, function(err, user){
                  if(user){
                    return done(null, user);
                  }
                });
              }else{
                return done(null, false, { message: 'Access denied.'}); 
              }

            });
          }else{
            if (user.password !== password) { return done(null, false, { message: 'Invalid password' }); }
            return done(null, user);
          }

        });
      });
    }
  ));

  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
  });

  app.configure('development', function(){
    app.use(express.errorHandler());
  });

  require("./controllers/home")(app);
  require("./controllers/pivotalMothods")(app);

  app.post('/login', 
          passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
          function(req, res) {
            res.redirect('/');
  });

  http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });

});
