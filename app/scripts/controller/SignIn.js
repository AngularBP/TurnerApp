//Controller SignIn
PT.controller.SignIn = PT.define(PT.controller.Base, {
	oType:'PT.controller.SignIn',
	inject:['$scope','PT.provider.Http'],
	STATIC: {
		URL: {
			signIn: 'signIn'
		}
	},
	$http: null,
	data: null,

	constructor: function(scope,http) {
		PT.controller.SignIn.Super.call(this, scope);
		this.$http = http;
	},
	initScope: function() {
		this.initUser();
	},
	getHttp: function(){
		return this.$http;
	},
	initUser: function() {
		var _user = this.getUser();
		var _scope = this.getScope();
		_scope.user = {
			email: function(email){
				if (angular.isDefined(email)) {
					_user.email = email;
				}
			},
			password: function(password){
				if (angular.isDefined(password)) {
					_user.password = password;
				}
			},
			remember: function(remember){
				if (angular.isDefined(remember)) {
					_user.remember = remember;
				}
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
	signIn: function() {
		var url = PT.getUrl(this.STATIC.signIn);
		var user = this.getUser();
		var data = {
			email: user.email,
			password: user.password
		};
		this.getHttp().post(url,password).success(this.success).error(this.error);
	},
	success: function(data,status,headers,config){
		if (data.success) {
			
		} else {
			
		}
	},
	error: function(data,status,headers,config){}
});