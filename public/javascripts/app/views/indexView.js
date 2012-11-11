TXE.Views.indexView = Backbone.View.extend({
  el: '#main-content',

  collection: new TXE.Collections.projectsCollection(),

  initialize: function(){
    this.template = _.template($('#landing-page').html());

    this.collection.bind("reset", this.render, this);
    this.collection.fetch();
  },

  render: function(){
    this.$el.html(this.template);

    if (TXE.user && TXE.user.token) {
      this.$('#work-area').html(_.template($('#projects-list').html()));

      var context = this.collection.toJSON();

      this.collection.forEach(function(project) {
        var projectItem = new TXE.Views.ProjectItem({model: project});
        this.$('.project-items').append(projectItem.el);
      });

      this.topNavBarView = new TXE.Views.topNavBarView({collection: this.collection});
    } else {
      this.$('#work-area').html(_.template($('#loginform').html()));
    }
  }
});
