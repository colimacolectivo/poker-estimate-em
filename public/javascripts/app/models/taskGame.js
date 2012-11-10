TXE.Models.taskGame = Backbone.Model.extend({
  localStorage: new Backbone.LocalStorage("taskGame"),
  
  initialize: function(projectId){
    this.project_id = projectId;
  },

  url: function(){
    // NOTICE the url below does not specify the game id and is not required to be sent part of data on the POST method.
    return window.location.pathname + 'api/v1/projects/' + this.project_id + '/games/add_tasks'
  }
});
