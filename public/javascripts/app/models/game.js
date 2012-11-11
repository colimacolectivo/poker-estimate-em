TXE.Models.Game = Backbone.Model.extend({
  idAttribute: "_id",

  url: function() {
    if(this.isNew()) {
      return  "/api/v1/games/new";
    } else {
      return  "/api/v1/projects/" +this.get('project_id')+ "/games/" +this.get('_id');
    }
  }
});
