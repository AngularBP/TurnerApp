/**
 * Http util
 */
PT.util.Http = PT.define({
	/**
	 * Static values
	 * @type {[object]}
	 */
	STATIC: {
		METHOD: {
			GET: 'GET',
			POST: 'POST',
			PUT: 'PUT',
			DELETE: 'DELETE'
		}
	},
	/**
	 * class type
	 * @type {String}
	 */
	oType: 'PT.util.Http',
	/**
	 * Inititialize class
	 * Inititialize block variables
	 * @param  {[object]} config
	 */
	constructor: function(config) {
		this.$http = config.$http;
	},
	/**
	 * RESTful get
	 * @return {[type]}
	 */
	get: function(){},
	/**
	 * RESTful post
	 * @param  {[type]} config
	 * @return {[type]}
	 */
	post: function(config){
		config = config || {};
		config.method = this.STATIC.METHOD.POST;
		return this.$http(config);
	},
	put: function(){},
	delete: function(){},
	head: function(){},
	/**
	 * Triggered when controller is about
	 * to be destroyed, clear all remaining values.
	 */
	destroy: function() {
	}
});