TXE.Views.topNavBarView = Backbone.View.extend({
  el: '.top-bar',
  template: _.template(TXE.Templates.projectsTopNavTemplate),
  initialize: function(context){
    this.context = context;
    this.render();
  },
  render: function(){
    this.$('.dropdown').html(this.template({context: this.context}));
  }
});
