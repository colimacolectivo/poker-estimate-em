TXE.Views.Project = Backbone.View.extend({

  el: "#main-content",
  
  initialize: function() {
    this.template = _.template($("#project-view").html());
    a=this.tasksCollection = new TXE.Collections.tasksCollection(this.model.get('id'))

    this.tasksCollection.fetch();

    this.tasksCollection.on('reset', this.render, this);
  },

  render: function() {
    this.$el.html(this.template({
      project: this.model.toJSON()
    }));
  }

});
