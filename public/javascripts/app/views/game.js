TXE.Views.Game = Backbone.View.extend({

  el: "#poker-game",

  events:{
  },

  initialize: function(){
    this.chatView = new TXE.Views.chatView();
    this.template= _.template($("#pokerGameTemplate").html());
    $('#main-content').html(this.template());
  },

  render: function(){
  }
});
