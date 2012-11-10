TXE.Views.indexView = Backbone.View.extend({
  el: '#main-content',

  projectsTemplate: _.template(TXE.Templates.projectsTemplate),

  userLoginTemplate: _.template(TXE.Templates.userLoginTemplate),

  collection: new TXE.Collections.projectsCollection(),

  events: {
    "doubleclick .project" : "displayForm",
    "click .fn-createGame" : "creatingGame"
  },

  initialize: function(){
    this.collection.bind("reset", this.render, this);
    this.collection.fetch();
    this.user_logged_in = eval($("#user_logged_in").val());
  },

  render: function(){
    //if (this.user_logged_in) {
      //var context = this.collection.toJSON();
      //this.$('#projects').html(this.projectsTemplate({context: context}));
    //} else {
      //this.$('#projects').html(this.userLoginTemplate);
    //}
  },

  creatingGame: function(e){
  }

});
