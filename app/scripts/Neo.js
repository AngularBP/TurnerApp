'use strict';

var Neo = {
	STATIC: {
		O_TYPE:{
			controller:'.controller.'
		},
		BUILD_MODE: {
			dev:'dev',
			prod:'prod'
		}
	},
	define: function() {
		var newClass,oType,oTypes;
		oTypes = this.STATIC.O_TYPE;
		newClass = my.Class.apply(my,arguments);
		if (arguments.length === 1) {
			newClass.$inject = arguments[0].$inject;
		} else {
			newClass.$inject = arguments[1].$inject;
			oType = arguments[1].oType;
			if (oType.indexOf(oTypes.controller) > -1) {
				Neo.PageTurner.controller(oType, newClass);
			}
		}
		return newClass;
	},
	getUrl: function(id,dataId) {
		var path,basePath,url,devMode;
		devMode = this.buildMode === this.STATIC.BUILD_MODE.dev ? true : false;
		basePath = devMode ? this.Endpoint.config.path.base.mock : this.Endpoint.config.path.base.live;
		url = this.Endpoint.url[id];
		if (!url) {
			throw "Unknown url"
		}
		if (devMode) {
			url = url.mock ? url.mock : url.live;
			url = basePath + '/' + url + '.json';
		} else {
			url = basePath + '/' + url.live;
		}
		return url;
	}
};

//namespace
Neo.module = Neo.module || {};
Neo.controller = Neo.controller || {};