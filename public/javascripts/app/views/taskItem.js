TXE.Views.TaskItem = Backbone.View.extend({

  tagName: 'li',
  className: 'item four task',
  
  initialize: function() {
    this.template = _.template($('#task-item-template').html());
    this.model.on('change reset', this.render, this);
    this.render();
  },

  render: function() {
    var self = this;

    this.$el.html(this.template(this.model.toJSON()));

    this.$el.draggable({
      revert: "invalid",
      opacity: 1,
      cursor: "move"
    });

    this.$el.data('id', this.model.get('id'));
    return this;
  }

});

