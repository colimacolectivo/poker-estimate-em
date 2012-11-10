TXE.Models.Game = Backbone.Model.extend({

  initialize: function(projectId){
    this.url = '/api/v1/projects/' + projectId + '/games/new';
  }

});
