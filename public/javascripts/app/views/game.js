TXE.Views.Game = Backbone.View.extend({

  el: "#main-content",

  events:{
    "click .item" : "displayInformation"
  },

  initialize: function(){
    this.template= _.template($("#pokerGameTemplate").html());
    $('#main-content').html(this.template());
    this.chatView = new TXE.Views.chatView();

    this.model.bind('change', this.render, this);
    this.model.fetch();
    $(".description-information").hide();
    $(".chat-information").removeClass("three").addClass("eight");

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
      $list.prepend("<li class='item'>"+id+"<input type='hidden' class='id_task' value='"+id+"'/><a class='user'>ER</a><a class='delete'></a></li>");
    });

  },
  
  displayInformation: function(el) {
    var selected = $(el.target).find('.id_task').val();
    TXE.router.navigate('projects/'+ this.model.get('project_id') +'/game/'+this.model.get('_id')+'/tasks/'+selected, true);
  }
});
