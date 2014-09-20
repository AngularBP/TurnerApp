PT.provider.Http = PT.define({
	oType: 'PT.provider.Http',
	//using at config e.g. PTApp.config(["HttpProvider",function(HttpProvider){}]);
	alias: 'httpProvider',
	$get:['$http',function($http){
		return new PT.util.Http({$http:$http});
	}]
});