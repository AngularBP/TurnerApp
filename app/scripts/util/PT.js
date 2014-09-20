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
		var newClass,o,oType,oTypes,isBase,namespaces,category,modlue,name,alias;
		modlue = window.PTApp;
		oTypes = this.STATIC.O_TYPE;
		newClass = my.Class.apply(my,arguments);
		o = arguments.length === 1 ? arguments[0] : arguments[1];
		newClass.$inject = o.$inject;
		oType = o.oType;
		//root.category.name
		namespaces = oType.split('.');
		//provider uses name "providerName". the name will use as "providerNameProvider" at config.
		//e.g. PTApp.config(["HttpProvider",function(HttpProvider){}]);
		name = namespaces[namespaces.length - 1];
		isBase = name === oTypes.base ? true : false;
		category = namespaces[1];

		if (!isBase) {
			if (category === oTypes.controller) {
				modlue.controller(oType, newClass);
			} else if (category === oTypes.provider) {
				modlue.provider(name.toLowerCase(), newClass);
			}
		}
		return newClass;
	},
	getUrl: function(id,dataId) {
		var path,basePath,url,devMode,endPoint;
		devMode = PT.buildMode === PT.STATIC.BUILD_MODE.dev ? true : false;
		endPoint = PT.Endpoint;
		basePath = devMode ? endPoint.config.path.base.mock : endPoint.config.path.base.live;
		url = endPoint.url[id];
		if (!url) {
			throw 'Unknown url';
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