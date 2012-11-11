TXE.Router = Backbone.Router.extend({
  routes: {
    "" : "index",
    "projects/:id"          : "showProject",
    "projects/:proId/game/:gameId" : "playGame"
  },

  index: function(){
    this.indexView = new TXE.Views.indexView();
  },

  showProject: function(id) {
    var model = new TXE.Models.Project({id: id}),
        self = this;

    model.fetch().done(function(data) {
      self.projectView = new TXE.Views.Project({model: model});
    });
    // model.on('reset', function(){
    //   this.projectView = new TXE.Views.Project({model: model});
    // }, this);
  },

  playGame: function(proId, gameId){
    if(this.game){
      this.game.undelegateEvents();
      delete this.game;
    }

    this.game = new TXE.Views.Games({
      projectId: proId,
      gameId: gameId
    });

  }

});
