TXE.Models.Game = Backbone.Model.extend({
  idAttribute: "_id",
  initialize: function(proId, gameId){
    this.url = "/api/v1/projects/"+proId+"/games/"+gameId;
  }
});
