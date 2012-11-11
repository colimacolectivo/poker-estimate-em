TXE.Views.projectGamesView = Backbone.View.extend({

  el: "#game-container",

  template: _.template(TXE.Templates.projectGamesTemplate),

  events:{
    "click .fn-createGame"   : "showGameInput",
    "keydown .fn-game-name " : "keyCreate",
    "click .fn-removeGame"   : "removeGame"
  },

  initialize: function(){
    this.$el.attr('hidden', false);
    this.model = new TXE.Models.Game(this.options.projectId);
    this.collection = new TXE.Collections.gamesCollection(this.options.projectId),
    this.collection.bind("reset change", this.render,this);
    this.collection.fetch();
    this.hideIndexView();
  },

  render: function(){
    $('h1.name').html(this.options.projectName);
    this.$('.fn-game-list').html(this.template({games: this.collection.toJSON()}));
  },

  showGameInput: function(){
    $('.fn-game-input').attr('hidden', false);
    $('.fn-game-name').focus();
  },

  keyCreate: function(e){
    if((e.keyCode === 13) && (e.keyCode !== "")){
      this.createGame();      
    } if (e.keyCode === 27){
      $('.fn-game-input').attr('hidden', true);
      $('.fn-game-name').blur();
    }
  },

  createGame: function(e){
    var name = $('.fn-game-name').val(),
        self = this;
    this.model.save({project_id: this.options.projectId, name: name},{url: '/api/v1/games/new'}).done(function(){
      self.collection.fetch();
    });
    $('.fn-game-name').val('');
  },

  removeGame: function(e){
    var gameId = $(e.target).parent().attr('data-id');
  },

  hideIndexView: function(){
    $("#main-content").hide();
    this.$el.show();
  }

//games could be delated
//Games Name could be edited
//When a game is played it should be showed disabled.
//Show a list of tasks
//As a user I'm able to drag tasks and drop them into a game
//Multiple selection of tasks
//A select All button for tasks
//When a task is dropped to a game it should dissapear from tasks lists
 
});
