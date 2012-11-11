TXE.Models.Game = Backbone.Model.extend({
  idAttribute: "_id",
  url: '/api/v1/projects/:projectId/games/:id'
});
