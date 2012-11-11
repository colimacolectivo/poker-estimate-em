TXE.Views.GameItem = Backbone.View.extend({

  tagName: 'li',
  className: 'item',
  
  events: {
    "click .delete" : "remove",
    "click .play" : "play",
    "drop" : "onDrop"
  },

  initialize: function() {
    this.template = _.template($('#game-item-template').html());
    this.model.on('change reset', this.render, this);
    this.render();
  },

  play: function() {
    TXE.router.navigate('projects/'+ this.model.get('project_id') +'/game/'+this.model.get('_id'), true);
  },

  remove: function() {
    this.$el.remove();
    this.model.destroy();
    delete this;
  },

  edit: function() {
      
  },

  pushTask: function(id) {
    var model = new TXE.Models.TaskGame({
      project_id: this.model.get('project_id'),
      gameId: this.model.get('_id'),
      tasks: [id]
    });

    model.save();
  },

  onDrop: function(e, ui) {
    this.pushTask($(ui.draggable).data('id'));
    $(ui.draggable).remove();
  },

  render: function() {
    var self = this;

    this.$el.html(this.template(this.model.toJSON()));

    this.$el.droppable({
      accept: '.task'
      // scope: 'tasks'
    });

    return this;
  }

});

