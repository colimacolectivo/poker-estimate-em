TXE.Collections.tasksCollection = Backbone.Collection.extend({
  // This collection allows you to instantiate the object with the project id allowing them make only requests or get information from the API related to that project
  initialize: function(pid) {
    this.project_id = pid || 0;
  },

  url: function() {
    return '/api/v1/projects/' + this.project_id + '/tasks';
  }

});
