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
		var newClass,o,oType,oTypes,isBase,namespaces,category,modlue;
		modlue = PTApp;
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
				modlue.controller(oType, newClass);
			} else if (category === oTypes.provider) {
				modlue.provider(namespaces[namespaces.length - 1], newClass);
			}
		}
		return newClass;
	},
	getUrl: function(id,dataId) {
		var path,basePath,url,devMode,endPoint;
		devMode = PT.buildMode === PT.STATIC.BUILD_MODE.dev ? true : false;
		endPoint = PT.Endpoint;
		basePath = devMode ? endpoint.config.path.base.mock : endpoint.config.path.base.live;
		url = endpoint.url[id];
		if (!url) {
			throw "Unknown url"
		}
		if (devMode) {
			url = angular.isString(url) ? url : url.mock ? url.mock : url.live;
			url = basePath + '/' + url + '.json';
		} else {
			url = angular.isString(url) ? url : url.live;
			url = basePath + '/' + url;
		}
		return url;
	},
	getI18n: function(id){
		return PT.I18n[id];
	}
};

//namespace
PT.module = PT.module || {};
PT.controller = PT.controller || {};
PT.provider = PT.provider || {};
PT.util = PT.util || {};