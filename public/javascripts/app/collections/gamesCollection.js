TXE.Collections.gamesCollection = Backbone.Collection.extend({
  model: TXE.Models.Game,

  initialize: function(projectId){
    this.url = '/api/v1/projects/' + projectId + '/games';
  }

});
