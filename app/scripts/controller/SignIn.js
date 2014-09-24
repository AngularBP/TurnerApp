//Controller SignIn
PT.controller.SignIn = PT.define(PT.controller.Base, {
	oType:'PT.controller.SignIn',
	inject:['$scope','http','$window'],
	STATIC: {
		URL: {
			signIn: 'signIn',
			signOut: 'signOut'
		},
		I18N: {
			signInFail:'signIn.fail'
		}
	},
	$http: null,
	data: null,

	constructor: function($scope,http,$window) {
		PT.controller.SignIn.Super.call(this, $scope);
		this.$http = http;
		this.$window = $window;
	},
	initEvents: function(){
		var me = this;
		this.$scope.onClickLoginBtn = function(e){
			me.onClickLoginBtn(e);
		};
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
			remember: function(remember){
				if (angular.isDefined(remember)) {
					_user.remember = remember;
				}
				return _user.remember;
			},
			name: function(name) {
				if (angular.isDefined(name)) {
					_user.name = name;
				}
				return _user.name;
			},
			userRole: function(userRole) {
				if (angular.isDefined(userRole)) {
					_user.userRole = userRole;
				}
				return _user.userRole;
			}
		};
	},

	onClickLoginBtn: function(e){
		this.signIn();
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
	setUser: function(token){
		var user = null;
		if (token) {
			user = JSON.parse(this.decodeBase64(token.split('.')[1]));
		}
	    this.data.user = user;
	},
	signIn: function() {
		var config = {
			url: PT.getUrl(PT.controller.SignIn.URL.signIn),
			data: this.getUser()
		};
		var me = this;
		this.$http.post(config).success(function(data,status,headers,config){
			me.success(data,status,headers,config);
		}).error(function(){
			me.error(data,status,headers,config);
		});
	},
	signOut: function(){
		var url = PT.getUrl(PT.controller.SignIn.URL.signOut);
		var user = this.getUser();
		var data = {
			email: user.email
		};

		this.$http.post(url,password)
			.success(function(data,status,headers,config){

			})
			.error(function(data,status,headers,config){

			});

		this.setUser();
		this.initToken();
	},
	success: function(data,status,headers,config){
		this.setUser();
		this.initToken();
		if (data.success) {
			this.$window.sessionStorage.token = data.token;
	        this.$scope.isAuthenticated = true;
	        this.setUser(data.token);
	        alert(angular.toJson(data));
		}
	},
	error: function(data,status,headers,config){
		this.initToken();
		this.$scope.error = PT.getI18n(PT.controller.SignIn.I18N.signInFail);
	},
	initToken: function(){
		delete this.$window.sessionStorage.token;
        this.$scope.isAuthenticated = false;
	},
	decodeBase64: function(str){
		var output = str.replace('-', '+').replace('_', '/');
		switch (output.length % 4) {
			case 0:
			  break;
			case 2:
			  output += '==';
			  break;
			case 3:
			  output += '=';
			  break;
			default:
			  throw 'Illegal base64url string!';
		}
		return window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
	}
});