
'use strict';
// var my = my || {};
// var Neo = Neo || {};
// Neo.controller = Neo.controller || {};
/**
 * Base controller for all controllers.
 * Use this as a template for all future controllers
 *
 * Use of My.Class.js
 *
 * @author Neo [mcchae7@gmail.com]
 */
Neo.controller.Base = my.Class({
	//use the "STATIC" field to define static fields
	STATIC: null,
	$scope: null,
	/**
	 * Initialize Notes Controller
	 * @param $scope, current controller scope
	 */
	constructor: function(scope) {
		this.init(scope);
	},
	init: function(scope) {
		this.$scope = scope;
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

	/**
	 * Triggered when controller is about
	 * to be destroyed, clear all remaining values.
	 */
	destroy: function() {
	}
});
Neo.controller.Base.$inject = ['$scope'];