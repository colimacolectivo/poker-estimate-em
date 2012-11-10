window.TexasEstimateEm = {
  Models: {},
  Collections: {},
  Views: {},

  Initialize: function(){
    TexasEstimateEm.router = new texasEstimateEm.Router();
    Backbone.history.stary({pushState: true});
  }
};

$(function(){
  TexasEstimateEm.Initialize();
});
