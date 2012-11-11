TXE.Views.Project = Backbone.View.extend({

  el: "#main-content",

  events: {
   "keyup .fn-game-name" : "addGame",
   "click .fn-createGame": "add",
   "click .fn-taskList .item": "select",
   "keyup .fn-filter-tasks" : "filter"
  },
  
  initialize: function() {
    var self = this;

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

  select: function(e){
    var $target = $(e.currentTarget);

    $target.toggleClass("selected");
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
    this.$('.fn-game-input')
      .show()
      .find('input')
      .val('')
      .focus();

  },

  addGame: function(e){
    var name = e.currentTarget.value;

    if(e.keyCode === 13){
      var projectId = this.model.get('id');

      this.$('.fn-game-input').hide();
      var model = this.games.create({
        name: name,
        project_id: this.model.get('id')
      });
      
      this.renderGame(model);
    }

  },

  filter: function(e){
    var query = $(e.target).val();
    if(query === ""){
      $('.fn-taskList').html('');
      this.showTasks();
    } else {
      this.search(query);
    }
  },

  search: function(query){
    $('.fn-taskList').html('');
    var self = this,
        results = _.filter(this.tasks.models, function(task){ return task.attributes.title.match(RegExp(query)) });
    _.each(results, function(result){ self.renderTask(result) });
  },

  render: function() {
    this.$el.html(this.template({
      project: this.model.toJSON()
    }));
  }

});
