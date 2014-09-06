'use strict';
// var my = my || {};
// var Neo = Neo || {};
// Neo.controller = Neo.controller || {};
//Controller SignIn
Neo.controller.SignIn = my.Class(Neo.controller.Base, {
  constructor: function(scope) {
    Neo.controller.SignIn.Super.call(this, scope);
  },
  initScope: function() {
    var s = this.$scope;
    s.email = 'mcchae7@gmail.com';
    s.password = 'password';
  }
});
Neo.controller.SignIn.$inject = ['$scope'];

//inject controller
Neo.module.PageTurner.controller('Neo.controller.SignIn',Neo.controller.SignIn);