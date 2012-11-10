TXE.Router = Backbone.Router.extend({
  routes: {
    "" : "index"
  },

  initialize: function(){
  },

  index: function(){
    this.indexView = new TXE.Views.indexView();
  }

});
