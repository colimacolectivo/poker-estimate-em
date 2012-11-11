TXE.Router = Backbone.Router.extend({
  routes: {
    "" : "index",
    "projects/:id" : "showProject"
  },

  initialize: function(){
  },

  index: function(){
    this.indexView = new TXE.Views.indexView();
    this.chatView = new TXE.Views.chatView();
  },

  showProject: function(id) {
    // var model = TXE.Models.Project({id: id});

    // model.on('reset', function(){
    //   this.projectView = new TXE.Views.Project({model: model});
    // }, this);
  }

});
