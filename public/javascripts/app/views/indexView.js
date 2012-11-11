TXE.Views.indexView = Backbone.View.extend({
  el: '#main-content',

  projectsTemplate: _.template(TXE.Templates.projectsTemplate),

  collection: new TXE.Collections.projectsCollection(),

  events: {
    "click .fn-project" : "displayForm",
    "click .fn-createGame" : "createGame",
    "keydown .fn-game-name " : "keyCreate"
  },

  initialize: function(){
    this.collection.bind("reset", this.render, this);
    this.collection.fetch();
    this.user_logged_in = this.$('#user_logged_in').val() === "true";
  },

  render: function(){
    if (this.user_logged_in) {
      var context = this.collection.toJSON();
      this.getProjectGames(context);

      this.$('.project-items').html(this.projectsTemplate({context: context}));
      this.topNavBarView = new TXE.Views.topNavBarView(context);
    }
  },

  getProjectGames: function(context){
    _.each(context, function(project){
      var projectId = project.id;
      games = new TXE.Collections.gamesCollection(projectId);
      games.fetch().done(function(data){
        var gamesProject = $(".fn-project[data-id="+projectId+"]").find(".two");
        gamesProject.text(data.length); 
      });
    });
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
    project = this.collection.get(this.projectId);
    games.fetch().done(function(data){
    });
    $('.action-panel').attr('hidden', false);
    $('.fn-game-name').attr('placeholder', 'Game name for ' + project.attributes.name);
    $('.fn-game-name').focus();
    
  },

  keyCreate: function(e){
    var key = $(".fn-game-name").val();
    if((e.keyCode === 13) && (e.keyCode !== "")){
      this.createGame();      
    } if(e.keyCode === 27){
      $(".fn-game-name").blur();
      $(".action-panel").attr("hidden", true);
    }
  }

});
