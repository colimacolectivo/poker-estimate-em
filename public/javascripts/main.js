var TXE = {
  Models: {},
  Collections: {},
  Views: {},
  Templates: {},

  Initialize: function(){
    TXE.router = new TXE.Router();
    Backbone.history.start({pushState: true});
  }
};

$(function(){
  TXE.Initialize();
});
