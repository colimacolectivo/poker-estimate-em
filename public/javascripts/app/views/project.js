TXE.Views.Project = Backbone.View.extend({

  el: "#main-content",

  events: {
   "keyup .fn-game-name" : "addGame",
   "click .fn-createGame": "add"
  },
  
  initialize: function() {
    this.template = _.template($("#project-view").html());
    var projectId = this.model.get('id');

    this.tasks = new TXE.Collections.tasksCollection(projectId);
    this.tasks.on('reset', this.showTasks, this);
    this.tasks.fetch();

    this.games = new TXE.Collections.gamesCollection(projectId);
    this.games.on('reset', this.showGames, this);
    this.games.fetch();

    this.render();
  },

  showTasks: function() {
    this.tasks.forEach(this.renderTask);
  },

  renderTask: function(model) {
    var task = new TXE.Views.TaskItem({model: model});
    this.$('.fn-taskList').append(task.el);
  },

  showGames: function() {
    this.games.forEach(this.renderGame);
  },

  renderGame: function(model) {
    var game = new TXE.Views.GameItem({model: model});
    this.$('.fn-game-list').append(game.el);
  },

  add: function(e){
    e.preventDefault();
    $('.fn-game-input').show();
  },

  addGame: function(e){
    var name = e.currentTarget.value;
    var collection = this.games;

    if(e.keyCode === 13){
      var projectId = this.model.get('id');
      $('.fn-game-input').hide();
      $.ajax({
        type: "POST",
        url: "/api/v1/games/new",
        data: {project_id: projectId, name: name}
      }).done(function(){
        collection.fetch();
      });
    }

  },

  render: function() {
    this.$el.html(this.template({
      project: this.model.toJSON()
    }));
  }

});
