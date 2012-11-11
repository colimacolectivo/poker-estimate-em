TXE.Views.TopProjectItem = Backbone.View.extend({

  events: {
    "click" : "gotoProject"
  },

  initialize: function(){
    this.template = _.template($('#projectItemTopTemplate').html());
    this.render();
  },

  gotoProject: function() {
    TXE.router.navigate('projects/'+this.model.get('id'), true);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

});
