TXE.Models.taskGame = Backbone.Model.extend({
  localStorage: new Backbone.LocalStorage("taskGame"),
  
  initialize: function(projectId){
    this.url = window.location.pathname + 'api/v1/projects/' + projectId + '/games/add_tasks';
  }

});
