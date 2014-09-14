//Controller Category
Neo.controller.Category = Neo.define(Neo.controller.Base, {
	$inject:['$scope'],
	oType:'Neo.controller.Category',
	constructor: function(scope) {
		Neo.controller.Category.Super.call(this, scope);
	},
	initScope: function() {
	}
});