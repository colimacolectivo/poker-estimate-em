TXE.Models.taskGame = Backbone.Model.extend({

  url: function(){
    return '/api/v1/projects/' + this.get('project_id') + '/games/add_tasks';
  }

});
