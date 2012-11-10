TXE.Collections.gamesCollection = Backbone.Collection.extend({

  initialize: function(projectId){
    this.project_id = projectId;
    this.url = window.location.pathname + 'api/v1/projects/' + projectId + '/games';
  },

  show: function(gameId){
    var old = this.url;
    this.url = old + '/' + gameId;
    this.fetch();
    this.url = old;
  },

  // TODO add the create action
  create: function(name){
    var game = new TXE.Models.Game(this.project_id);
    game.save({name: name});
  },

  addTasks: function(name){
    var taskGame = new TXE.Models.taskGame(this.project_id);
    taskGame.save({name: name});
  }

});
