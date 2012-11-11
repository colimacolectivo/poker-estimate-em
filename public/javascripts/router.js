TXE.Router = Backbone.Router.extend({
  routes: {
    "" : "index",
    "projects/:id" : "showProject"
  },

  index: function(){
    this.indexView = new TXE.Views.indexView();
    this.chatView = new TXE.Views.chatView();
  },

  showProject: function(id) {
    var model = new TXE.Models.Project({id: id}),
        self = this;

    model.fetch().done(function(data) {
      self.projectView = new TXE.Views.Project({model: model});
    });
  }

});
