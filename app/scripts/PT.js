'use strict';

var PT = {
	STATIC: {
		O_TYPE:{
			controller: 'controller',
			provider: 'provider', 
			base: 'Base', 
		},
		BUILD_MODE: {
			dev:'dev',
			prod:'prod'
		}
	},
	define: function() {
		var newClass,o,oType,oTypes,isBase,namespaces;
		oTypes = this.STATIC.O_TYPE;
		newClass = my.Class.apply(my,arguments);
		o = arguments.length === 1 ? arguments[0] : arguments[1];
		newClass.$inject = o.$inject;
		oType = o.oType;
		//root.module.category.name
		namespaces = oType.split('.');
		isBase = namespaces[namespaces.length - 1] === oTypes.base ? true : false;
		category = namespaces[1];
		if (!isBase) {
			if (category === oTypes.controller) {
				PT.controller(oType, newClass);
			} else if (category === oTypes.provider) {
				PT.provider(oType, newClass);
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
PT.module = PT.module || {};
PT.controller = PT.controller || {};
PT.provider = PT.provider || {};