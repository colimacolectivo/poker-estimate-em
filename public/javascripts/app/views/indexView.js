TXE.Views.indexView = Backbone.View.extend({
  el: '#main-content',

  collection: new TXE.Collections.projectsCollection(),

  initialize: function(){
    this.collection.bind("reset", this.render, this);
    this.collection.fetch();
    this.user_logged_in = this.$('#user_logged_in').val() === "true";
  },

  render: function(){
    this.$('.project-items').html('');

    if (this.user_logged_in) {
      var context = this.collection.toJSON();

      this.collection.forEach(function(project) {
        var projectItem = new TXE.Views.ProjectItem({model: project});
        this.$('.project-items').append(projectItem.el);
      });

      this.topNavBarView = new TXE.Views.topNavBarView({collection: this.collection});
    }
  }
});
