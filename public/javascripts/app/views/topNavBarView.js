TXE.Views.topNavBarView = Backbone.View.extend({
  el: '.top-bar',

  initialize: function(){
    this.render();
  },

  render: function(){
    var self = this;
    this.collection.forEach(function(project){
      var topProjectItem = new TXE.Views.TopProjectItem({model: project});
      self.$('.dropdown').append(topProjectItem.el);
    });
  },
});
