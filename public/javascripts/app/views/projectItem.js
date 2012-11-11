TXE.Views.ProjectItem = Backbone.View.extend({

  initialize: function(){
    this.template= _.template($("#projectItemTemplate").html());
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

});
