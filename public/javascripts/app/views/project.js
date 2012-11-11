TXE.Views.Project = Backbone.View.extend({

  el: "#main-content",
  
  initialize: function() {
    this.template = _.template($("#project-view").html());
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }

});
