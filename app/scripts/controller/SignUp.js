//Controller SignIn
Neo.controller.SignUp = Neo.define(Neo.controller.Base, {
	$inject:['$scope'],
	oType:'Neo.controller.SignUp',
	constructor: function(scope) {
		Neo.controller.SignUp.Super.call(this, scope);
	},
	initScope: function() {
		var s = this.$scope;
		s.email = 'mcchae7@gmail.com';
		s.password = 'password';
	}
});