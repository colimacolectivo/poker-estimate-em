TXE.Models.Description = Backbone.Model.extend({
  idAttribute: "_id",

  url: function() {
    return  "/api/v1/projects/" +this.get('project_id')+ "/tasks/" +this.get('_id');
  }
});
