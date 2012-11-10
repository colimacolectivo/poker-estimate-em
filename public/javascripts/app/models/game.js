TXE.Models.Game = Backbone.Model.extend({
  localStorage: new Backbone.LocalStorage("game"),

  initialize: function(projectId){
    this.project_id = projectId;
  },

  url: function(){
    return window.location.pathname + 'api/v1/projects/' + this.project_id + '/games/new'
  }
});
