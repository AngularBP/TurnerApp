//Controller SignIn
PT.controller.SignUp = PT.define(PT.controller.Base, {
	$inject:['$scope','PT.provider.Http','$location'],
	oType:'PT.controller.SignUp',
	STATIC: {
		URL: {
			signUp: 'signUp'
		}
	},
	$http: null,
	data: null,
	constructor: function(scope,http) {
		PT.controller.SignUp.Super.call(this, scope);
		this.$http = http;
	},
	initScope: function() {
		var s = this.$scope;
		s.email = 'mcchae7@gmail.com';
		s.password = 'password';
	},
	initScope: function() {
		this.initUser();
	},
	initUser: function() {
		var _user = this.getUser();
		this.$scope.user = {
			email: function(email){
				if (angular.isDefined(email)) {
					_user.email = email;
				}
				return _user.email;
			},
			password: function(password){
				if (angular.isDefined(password)) {
					_user.password = password;
				}
				return _user.password;
			},
			confirmPassword: function(confirmPassword){
				if (angular.isDefined(confirmPassword)) {
					_user.confirmPassword = confirmPassword;
				}
				return _user.confirmPassword;
			},
			name: function(name) {
				if (angular.isDefined(name)) {
					_user.name = name;
				}
				return _user.name;
			}
		};
	},
	getData: function(){
		this.data = this.data || {};
		return this.data;
	},
	getUser: function() {
		var data = this.getData();
		data.user = data.user || {};
		return data.user;
	},
	signUp: function() {
		var url = PT.getUrl(this.STATIC.signIn);
		var user = this.getUser();
		var data = {
			email: user.email,
			password: user.password
		};
		this.$http.post(url,password).success(this.success).error(this.error);
	},
	success: function(data,status,headers,config){
		if (data.success) {
			$location.path('/signin');
		}
	},
	error: function(data,status,headers,config){
		this.$scope.error = PT.getI18n(this.STATIC.I18N.signUpFail);
	}
});