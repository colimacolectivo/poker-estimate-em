TXE.Router = Backbone.Router.extend({
  routes: {
    "" : "index"
  },

  initialize: function(){
    console.log("Hello I'm working!");
  },

  index: function(){
    console.log("We're on Index page!");
  }

});
