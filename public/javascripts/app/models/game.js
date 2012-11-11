TXE.Models.Game = Backbone.Model.extend({
  idAttribute: "_id",

  url: function() {
    return  "/api/v1/projects/" +this.get('project_id')+ "/games/" +this.get('_id');
  }
});
