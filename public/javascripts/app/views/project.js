TXE.Views.Project = Backbone.View.extend({

  el: "#main-content",
  
  initialize: function() {
    this.template = _.template($("#project-view").html());
    var projectId = this.model.get('id');
    this.games = new TXE.Collections.gamesCollection(projectId);
    this.games.bind('reset', this.showGames, this);
    this.games.fetch();
    this.render();
  },

  showGames: function(){
    var gameList = this.$('.fn-game-input');
    var title = "";

    _.each(this.games.models, function(model){
      title=model.get('name');
      gameList.prepend("<li>"+title+"</li>");
    });
  },

  render: function() {
    this.$el.html(this.template());
  }

});
