TXE.Views.indexView = Backbone.View.extend({
  el: '#main-content',

  projectsTemplate: _.template(TXE.Templates.projectsTemplate),

  userLoginTemplate: _.template(TXE.Templates.userLoginTemplate),

  collection: new TXE.Collections.projectsCollection(),

  events: {
    "click .fn-project" : "displayForm",
    "click .fn-createGame" : "createGame"
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

  createGame: function(e){
    var game = new TXE.Models.Game(this.projectId),
        name = $('.fn-game-name').val();
    game.save({project_id: this.projectId, name: name});
    $('.fn-game-name').val('');
  },

  displayForm: function(e){
    $(".fn-project").removeClass("selected");
    this.projectId = $(e.currentTarget).addClass("selected").attr("data-id");
    var games = new TXE.Collections.gamesCollection(this.projectId);
    games.fetch().done(function(data){
      console.log(data);
    });
    $('.action-panel').attr('hidden', false)
    $('.fn-game-name').focus();
    
  }

});
