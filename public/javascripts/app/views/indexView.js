TXE.Views.indexView = Backbone.View.extend({
  el: '#main-content',

  template: _.template(TXE.Templates.IndexTemplate),

  collection: new TXE.Collections.projectsCollection(),

  events: {
  },

  initialize: function(){
    this.collection.bind("reset", this.render, this);
    this.collection.fetch();
  },

  render: function(){
    console.log(this.collection);
    // this.$el.html(this.template(this.collection.toJSON()));
  }
});
