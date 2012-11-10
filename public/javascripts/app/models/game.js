TXE.Models.Game = Backbone.Model.extend({
  localStorage: new Backbone.LocalStorage("game"),

  initialize: function(projectId){
    this.url =  window.location.pathname + 'api/v1/projects/' + projectId + '/games/new';
  }

});
