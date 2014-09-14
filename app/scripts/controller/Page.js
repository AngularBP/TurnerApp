//Controller Page
Neo.controller.Page = Neo.define(Neo.controller.Base, {
	$inject:['$scope'],
	oType:'Neo.controller.Page',
	constructor: function(scope) {
		Neo.controller.Page.Super.call(this, scope);
	},
	initScope: function() {
	}
});