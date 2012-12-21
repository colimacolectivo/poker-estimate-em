TXE.Router = Backbone.Router.extend({
  routes: {
    "" : "index",
    "projects/:id"          : "showProject",
    "projects/:proId/game/:gameId" : "playGame",
    "projects/:proId/game/:gameId/:taskId" : "showInformation"
  },

  initialize: function(){
    TXE.socket = io.connect(window.location.origin);
  },

  index: function(){
    this.indexView = new TXE.Views.indexView();
  },

  showProject: function(id) {
    if(this.projectView){
      this.projectView.undelegateEvents();
      delete this.projectView;
    }

    if (TXE.user.email){
      var model = new TXE.Models.Project({id: id}),
      self = this;

      model.fetch().done(function(data) {
        self.projectView = new TXE.Views.Project({model: model});
      });

    }else{
      this.navigate("", true);
    }
    // model.on('reset', function(){
    //   this.projectView = new TXE.Views.Project({model: model});
    // }, this);
  },

  showInformation: function(projectId, taskId, gameId) {
    console.log("Show information route");
    console.log(projectId+" "+taskId+" "+gameId);
    if(this.description){
      this.description.undelegateEvents();
      delete this.description;
    }

    if (TXE.user.email){

      this.game = new TXE.Views.Description({
        projectId: projectId,
        gameId: gameId,
        taskId: taskId,
        model: new TXE.Models.Description({
          project_id: projectId,
          task_id: taskId,
          _id: gameId
        })
      });

    }else{
      this.navigate("", true);
    }
  },

  playGame: function(proId, gameId){
    if(this.game){
      this.game.undelegateEvents();
      delete this.game;
    }

    if (TXE.user.email){

      this.game = new TXE.Views.Game({
        projectId: proId,
        gameId: gameId,
        model: new TXE.Models.Game({
          project_id: proId,
          _id: gameId
        })
      });

    }else{
      this.navigate("", true);
    }


  }

});
