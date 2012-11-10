TXE.Models.taskGame = Backbone.Model.extend({

  initialize: function(projectId){
    this.url = '/api/v1/projects/' + projectId + '/games/add_tasks';
  }

});
