TXE.Views.projectGamesView = Backbone.View.extend({

  el: "#games-content",

  template: _.template(TXE.Templates.projectGamesTemplate),

  events:{
    "click .fn-createGame"   : "createGame"
  },

  initialize: function(){
    this.$el.attr('hidden', false);
    this.collection = new TXE.Collections.gamesCollection(this.options.projectId),
    this.collection.bind("reset", this.render,this);
    this.collection.fetch();
    this.hideIndexView();
  },

  render: function(){
    $('#project-title').html(this.options.projectName);
    this.$('#games-list').html(this.template({games: this.collection.toJSON()}));
  },

  createGame: function(e){
    var game = new TXE.Models.Game(this.options.projectId),
        name = $('.fn-game-name').val();
    game.save({project_id: this.options.projectId, name: name});
    $('.fn-game-name').val('');
  },

  hideIndexView: function(){
    $("#main-content").hide();
    this.$el.show();
  }
//Add a "Create Game" button
//Show a list of games
//games could be delated
//Games Name could be edited
//When a game is played it should be showed disabled.
//Show a list of tasks
//As a user I'm able to drag tasks and drop them into a game
//Multiple selection of tasks
//A select All button for tasks
//When a task is dropped to a game it should dissapear from tasks lists
 
});
