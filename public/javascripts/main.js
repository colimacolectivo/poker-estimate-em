window.TXE = {
  Models: {},
  Collections: {},
  Views: {},

  Initialize: function(){
    TXE.router = new TXE.Router();
    Backbone.history.start({pushState: true});
  }
};

$(function(){
  TXE.Initialize();
});
