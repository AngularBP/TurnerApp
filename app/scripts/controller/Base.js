/**
 * Base controller for all controllers.
 * Use this as a template for all future controllers
 *
 * Use of My.Class.js
 *
 * @author Neo [mcchae7@gmail.com]
 */
PT.controller.Base = PT.define({
	//use the "STATIC" field to define static fields
	STATIC: null,
	//config object
	$scope: null,
	$inject: ['$scope'],
	//module name
	oType: 'PT.controller.Base',
	/**
	 * Initialize Notes Controller
	 * @param $scope, current controller scope
	 */
	constructor: function($scope) {
		this.$scope = $scope;
		this.init();
	},
	init: function() {
		this.initEvents();
		this.initScope();
	},
	/**
	 * Initialize listeners needs to be overrided by the subclass.
	 * Don't forget to call _super() to activate
	 */
	initEvents: function() {
	},
	/**
	 * Use this function to define all scope objects.
	 * Give a way to instantaly view whats available
	 * publicly on the scope.
	 */
	initScope: function() {
	},
	getScope: function(){
		return this.$scope;
	},
	/**
	 * Triggered when controller is about
	 * to be destroyed, clear all remaining values.
	 */
	destroy: function() {
	}
});