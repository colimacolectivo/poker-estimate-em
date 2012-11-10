TXE.Collections.tasksCollection = Backbone.Collection.extend({
  // This collection allows you to instantiate the object with the project id allowing them make only requests or get information from the API related to that project
  
  initialize: function(projectId){
    this.url = '/api/v1/projects/' + projectId + '/tasks';
    this.fetch();
  },

  all: function(){
    return this.models[0].get('tasks');
  },

  // this method allows you to get a specific task through the API by passing an ID
  show: function(taskId){
    var old = this.url;
    this.url = old + '/' + taskId;
    this.fetch();
    this.url = old;
  }
});
