TXE.Views.taskListView = Backbone.View.extend({

 el: "#list-task",

 template: _.template(TXE.Templates.tasksTemplate),

 events:{},

 initialize: function(){
  this.collection = new TXE.Collections.tasksCollection(this.options.projectId);
  this.collection.bind("reset change", this.render, this);
  this.collection.fetch();
 },

 render: function(){
   $('ul.fn-taskList').html(this.template({tasks: this.collection.toJSON()}));
 }

});
