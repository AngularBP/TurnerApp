//Controller SignIn
Neo.controller.SignIn = Neo.define(Neo.controller.Base, {
	$inject:['$scope'],
	oType:'Neo.controller.SignIn',
	constructor: function(scope) {
		Neo.controller.SignIn.Super.call(this, scope);
	},
	initScope: function() {
		var s = this.$scope;
		s.email = 'mcchae7@gmail.com';
		s.password = 'password';
	}
});