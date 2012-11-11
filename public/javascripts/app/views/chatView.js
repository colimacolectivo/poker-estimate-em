TXE.Views.chatView = Backbone.View.extend({
  el: "#chat",

  events: {
    "keyup #message" : "message",
    "click #send"    : "send"
  },

  initialize: function(){
    this.socket = io.connect(window.location.origin);
    this.socket.on("post", this.post);
  },

  message: function(e){
    var message = e.currentTarget.value;
    var socket  = this.socket;

    if (e.keyCode === 13){
      socket.emit("message",message);
    }
  },

  send: function(){
    var message = this.$('#message').val();
    this.socket.emit("message",message);
  },

  post: function(msg){
    $('#output').prepend('<p>'+msg+'</p>');
    $('#message').val("");
  }

});

