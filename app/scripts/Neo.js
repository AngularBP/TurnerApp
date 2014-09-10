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