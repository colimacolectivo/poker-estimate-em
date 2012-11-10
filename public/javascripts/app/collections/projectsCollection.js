TXE.Collections.projectsCollection = Backbone.Collection.extend({
  initialize: function(){ this.fetch(); },
  url: '/api/v1/projects',

  model: TXE.Models.Project,

  all: function(){
    return this.models[0].get('projects');
  },

  find: function(projectId){
    var old = this.url;
    this.url = old + '/' + projectId;
    this.fetch();
    this.url = old;
    return this.models[0].get('projects').shift();
  }
});
