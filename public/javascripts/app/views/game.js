TXE.Views.Game = Backbone.View.extend({

  el: "#poker-game",

  events:{
  },

  initialize: function(){
    this.template= _.template($("#pokerGameTemplate").html());
    $('#main-content').html(this.template());
    this.chatView = new TXE.Views.chatView();
  },

  render: function(){
  }
});
