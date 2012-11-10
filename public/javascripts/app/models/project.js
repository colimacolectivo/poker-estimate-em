TXE.Models.Project = Backbone.Model.extend({
  localStorage: new Backbone.LocalStorage("project"),
  
  url: window.location.pathname + '/api/v1/projects'
});
