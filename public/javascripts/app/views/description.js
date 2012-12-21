TXE.Views.Description = Backbone.View.extend({

  el: "#main-content",

  events:{
    "click .ca" : "selectCard",
    "click .item" : "displayInformation",
    "click .play" : "playPoker"
  },

  initialize: function(){
    console.log("Description view");
    $('.time').hide();
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
    var title = this.model.get('title');
    var description = this.model.get('description');
    var requester = this.model.get('requested_by');
    var owner = this.model.get('owned_by');
    var labels = this.model.get('labels');

    var $place = this.$(".display-description");
    var html = "<table>";
    html += "<tr><td class='bold-text'>Title:</td><td>"+title+"</td></tr>";
    html += "<tr><td class='bold-text'>Description:</td><td>"+description+"</td></tr>";
    html += "<tr><td class='bold-text'>Requester:</td><td>"+requester+"</td></tr>";
    html += "<tr><td class='bold-text'>Owner:</td><td>"+owner+"</td></tr>";
    html += "<tr><td class='bold-text'>Labels:</td><td>"+labels+"</td></tr>";
    //html += "<tr><td>:</td><td>"++"</td></tr>";
    html += "</table>";
    $place.prepend(html);
  },

  render2: function(){
    console.log(this.options.model2.attributes);
    var tasks = this.options.model2.get('tasks')|| [];
    var name = this.options.model2.get('name');
    var $list = this.$(".list");

    this.$('.results .three').text(name);

    _.each(tasks, function(task){ 
      var id = task.id;
      $list.prepend("<li class='item'>"+id+"<input type='hidden' class='id_task' value='"+id+"'/></li>");
    });

    $('li:contains("'+this.model.get('task_id')+'")').addClass('pointer').removeClass('item');
  },
  
  selectCard: function(el){
    $(".ca").removeClass("selected");
    $(el.target).addClass("selected");
  },

  displayInformation: function(el) {
    var selected = $(el.target).find('.id_task').val();
    TXE.router.navigate('projects/'+ this.model.get('project_id') +'/game/'+this.model.get('game_id')+'/tasks/'+selected, true);
  },

  playPoker: function() {
    $(".pointer").removeClass("pointer").addClass("item");
    $(".description-information").hide();
    $(".time").show();
    setInterval(function(){
      var currentTime = $(".timer").text();
      if(currentTime!="0"){
        $(".timer").text(parseInt(currentTime)-1)
      }
      else{
        clearInterval(this);
        this.view.stopListening();
      }
    }, 1000);
//TXE.router.navigate('projects/'+ this.model.get('project_id') +'/game/'+this.model.get('game_id')+'/tasks/'+this.model.get('task_id'), true);

  }

});
