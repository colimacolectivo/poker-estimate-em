TXE.Views.indexView = Backbone.View.extend({
  el: '#main-content',

  events: {
  },

  initialize: function(){
    var source = $('#projects').html();
    var template = Handlebars.compile(source);
    var data = {name: "From handlebars template"};
    $('.projects').append(template(data));
  }
});
