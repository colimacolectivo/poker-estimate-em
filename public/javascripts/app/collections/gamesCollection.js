TXE.Collections.gamesCollection = Backbone.Collection.extend({

  initialize: function(projectId){
    this.project_id = projectId;
    this.url = '/api/v1/projects/' + projectId + '/games';
  },

  all: function(){
    return this.models[0].get('games');
  },

  find: function(gameId){
    var old = this.url;
    this.url = old + '/' + gameId;
    this.fetch();
    this.url = old;
    return this.models[0].get('games');
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
