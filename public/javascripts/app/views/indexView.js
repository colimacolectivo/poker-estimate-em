TXE.Views.indexView = Backbone.View.extend({
  el: '#main-content',

  events: {
  },

  initialize: function(){
    this.template = JST['appindexTemplate'];
    this.$el.html(this.template);
  }
});
