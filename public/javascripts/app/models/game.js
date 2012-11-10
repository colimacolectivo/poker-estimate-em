TXE.Models.Game = Backbone.Model.extend({
  initialize: function(projectId){
    this.project_id = projectId;
  },

  url: function(){
    return window.location.pathname + 'api/v1/projects/' + this.project_id + '/games/new'
  }
});
