TXE.Models.TaskGame = Backbone.Model.extend({

  url: function() {
    if(this.isNew()) {
      return '/api/v1/games/add_tasks';
    } else {
      return  "/api/v1/projects/" +this.get('project_id')+ "/games/" +this.get('_id');
    }
  }

});
