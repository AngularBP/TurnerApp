//Controller Book
Neo.controller.Book = Neo.define(Neo.controller.Base, {
	$inject:['$scope'],
	oType:'Neo.controller.Book',
	constructor: function(scope) {
		Neo.controller.Book.Super.call(this, scope);
	},
	initScope: function() {
	}
});