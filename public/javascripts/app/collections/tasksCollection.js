TXE.Collections.tasksCollection = Backbone.Collection.extend({
  // This collection allows you to instantiate the object with the project id allowing them make only requests or get information from the API related to that project
  
  initialize: function(projectId){
    this.project_id = projectId;
  },

  url: function(){
    return window.location.pathname + 'api/v1/projects/' + this.project_id + '/tasks';
  },

  // this method allows you to get a specific task through the API by passing an ID
  show: function(taskId){
    $.getJSON(this.url() + '/' + taskId, function(data){
      return data;
    });
  }
});
