//Controller Book
PT.controller.Book = PT.define(PT.controller.Base, {
	$inject:['$scope'],
	oType:'PT.controller.Book',
	constructor: function(scope) {
		PT.controller.Book.Super.call(this, scope);
	},
	initScope: function() {
	}
});