TXE.Views.GameItem = Backbone.View.extend({

  tagName: 'li',
  className: 'item',
  
  events: {
    "click .delete" : "remove",
    "click .play" : "play"
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

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }

});

