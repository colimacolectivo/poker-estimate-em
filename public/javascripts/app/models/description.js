TXE.Models.Description = Backbone.Model.extend({
  idAttribute: "task_id",

  url: function() {
    return  "/api/v1/projects/" +this.get('project_id')+ "/tasks/" +this.get('task_id');
  }
});
