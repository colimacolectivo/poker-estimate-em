TXE.Views.TaskItem = Backbone.View.extend({

  tagName: 'li',
  className: 'item four',
  
  initialize: function() {
    this.template = _.template($('#task-item-template').html());
    this.model.on('change reset', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    this.$el.draggable({
        revert: "invalid",
        opacity: 0.6,
        cursor: "move",
        cursorAt: {
          top: 15,
          left: 25
        }
      });


      this.$el.data('model',this.model);
  }

});

