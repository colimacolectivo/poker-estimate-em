TXE.Collections.tasksCollection = Backbone.Collection.extend({
  // This collection allows you to instantiate the object with the project id allowing them make only requests or get information from the API related to that project
  
  initialize: function(projectId){
    this.url = '/api/v1/projects/' + projectId + '/tasks';
  }

});
