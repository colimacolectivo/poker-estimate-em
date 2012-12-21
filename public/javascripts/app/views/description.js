TXE.Views.Description = Backbone.View.extend({

  el: "#main-content",

  events:{
    "click .ca" : "selectCard"
  },

  initialize: function(){
    console.log("Description view");
    this.template= _.template($("#pokerGameTemplate").html());
    $('#main-content').html(this.template());
    this.chatView = new TXE.Views.chatView();

    this.model.bind('change', this.render, this);
    this.model.fetch();

    this.options.model2.bind('change', this.render2, this);
    this.options.model2.fetch();
  },

  render: function(){
    console.log(this.model.attributes);
    var titles = this.model.get('title');
    var description= this.model.get('description');
  },

  render2: function(){
    console.log(this.options.model2.attributes);
    var tasks = this.options.model2.get('tasks')|| [];
    var name = this.options.model2.get('name');
    var $list = this.$(".list");

    this.$('.results .three').text(name);

    _.each(tasks, function(task){ 
      var id = task.id;
      $list.prepend("<li class='item'>"+id+"</li>");
    });
  },
  
  selectCard: function(el){
    $(".ca").removeClass("selected");
    $(el.target).addClass("selected");
  }
});
