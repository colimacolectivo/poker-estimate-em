TXE.Models.Game = Backbone.Model.extend({
  idAttribute: "_id",

  initialize: function(projectId){
    this.url = '/api/v1/projects/' + projectId + '/games/new';
  }

});
