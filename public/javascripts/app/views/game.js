TXE.Views.Game = Backbone.View.extend({

  el: "#main-content",

  events:{
    "click .ca" : "selectCard"
  },

  initialize: function(){
    this.template= _.template($("#pokerGameTemplate").html());
    $('#main-content').html(this.template());
    this.chatView = new TXE.Views.chatView();

    this.model.bind('change', this.render, this);
    this.model.fetch();

  },

  render: function(){
    console.log(this.model.attributes);
    var tasks = this.model.get('tasks') || [];
    var name = this.model.get('name');
    //var description= this.model.get('description');
    //console.log(description);
    var $list = this.$(".list");

    this.$('.results .three').text(name);

    _.each(tasks, function(task){ 
      var id = task.id;
      $list.prepend("<li class='item'>"+name+" - "+id+"<div class='fn-description description'></div></li>");
    });

  },
  
  selectCard: function(el){
    $(".ca").removeClass("selected");
    $(el.target).addClass("selected");
  }
});
