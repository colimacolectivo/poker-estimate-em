TXE.Collections.projectsCollection = Backbone.Collection.extend({
  url: window.location.pathname + '/api/v1/projects',

  model: TXE.Models.Project,

  show: function(projectId){
    this.fetch();
  }
});
