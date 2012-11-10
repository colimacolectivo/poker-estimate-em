TXE.Collections.gamesCollection = Backbone.Collection.extend({
  initialize: function(projectId){
    this.project_id = projectId;
  },

  url: function(){
    return window.location.pathname + 'api/v1/projects/' + this.project_id + '/games';
  },

  model: function(){
    return new TXE.Models.Game(this.project_id);
  },

  show: function(gameId){
    $.getJSON(this.url() + '/' + gameId, function(data){
      return data;
    });
  },

  // TODO add the create action
  create: function(name){
    var game = this.model();
    game.save({name: name})
  }
});
