'use strict';

var Neo = {
	STATIC: {
		O_TYPE:{
			controller:'.controller.'
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
	}
};

//namespace
Neo.module = Neo.module || {};
Neo.controller = Neo.controller || {};

//e2e mock and live
//if there is no mock url, then live will be used for mock.
Neo.e2e = {
	config: {
		path: {
			'Base':{
				mock: './mock',
				live: './api'
			}
		}
	},
	url: {
		'SignIn': {
			live: 'SignIn',//./api/SignIn, mock:./api/SignIn.json
		},
		'SignUp': {
			live: 'SignUp'
		}
	}
};