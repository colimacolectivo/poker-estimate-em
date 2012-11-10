TXE.Collections.gamesCollection = Backbone.Collection.extend({
  model: TXE.Models.Game,

  initialize: function(projectId){
    this.project_id = projectId;
    this.url = '/api/v1/projects/' + projectId + '/games';
    this.fetch();
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
