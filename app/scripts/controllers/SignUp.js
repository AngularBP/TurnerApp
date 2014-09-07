//Controller SignIn
Neo.controller.SignUp = Neo.define(Neo.controller.Base, {
  constructor: function(scope) {
    Neo.controller.SignUp.Super.call(this, scope);
  },
  initScope: function() {
  }
});
Neo.controller.SignUp.$inject = ['$scope'];

//inject controller
Neo.module.PageTurner.controller('Neo.controller.SignUp',Neo.controller.SignUp);