TXE.Views.GameItem = Backbone.View.extend({

  tagName: 'li',
  className: 'item',
  
  initialize: function() {
    this.template = _.template($('#game-item-template').html());
    this.model.on('change reset', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }

});

