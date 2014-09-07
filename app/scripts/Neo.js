'use strict';

var Neo = {
	define: function() {
		return my.Class.apply(my,arguments);
	}
};
//namespace
Neo.module = Neo.module || {};
Neo.controller = Neo.controller || {};