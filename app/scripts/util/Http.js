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
			POST: PT.isDevMode ? 'GET' : 'POST',
			PUT: PT.isDevMode ? 'GET' : 'PUT',
			DELETE: PT.isDevMode ? 'GET' : 'DELETE'
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
	get: function(config){
		config = config || {};
		config.method = PT.util.Http.METHOD.GET;
		return this.$http(config);
	},
	/**
	 * RESTful post
	 * @param  {[type]} config
	 * @return {[type]}
	 */
	post: function(config){
		config = config || {};
		config.method = PT.util.Http.METHOD.POST;
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