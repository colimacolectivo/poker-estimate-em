TXE.Views.Project = Backbone.View.extend({

  el: "#main-content",
  
  initialize: function() {
    this.template = _.template($("#project-view").html());
    var projectId = this.model.get('id');

    this.tasksCollection = new TXE.Collections.tasksCollection(projectId);

    this.tasksCollection.fetch();

    this.tasksCollection.on('reset', this.showTasks, this);

    this.games = new TXE.Collections.gamesCollection(projectId);
    this.games.bind('reset', this.showGames, this);
    this.games.fetch();

    this.render();
  },

  showTasks: function() {
    this.tasksCollection.forEach(this.renderTask);
  },

  renderTask: function(model) {
    var task = new TXE.Views.TaskItem({model: model});
    this.$('.fn-taskList').append(task.el);
  },

  showGames: function(){
    var gameList = this.$('.fn-game-input');
    var title = "";

    _.each(this.games.models, function(model){
      title=model.get('name');
      gameList.prepend("<li>"+title+"</li>");
    });
  },

  render: function() {
    this.$el.html(this.template({
      project: this.model.toJSON()
    }));
  }

});
