//Controller SignIn
PT.controller.SignUp = PT.define(PT.controller.Base, {
	$inject:['$scope'],
	oType:'PT.controller.SignUp',
	constructor: function(scope) {
		PT.controller.SignUp.Super.call(this, scope);
	},
	initScope: function() {
		var s = this.$scope;
		s.email = 'mcchae7@gmail.com';
		s.password = 'password';
	}
});