

PT.provider.Http = PT.define({
	oType: 'PT.provider.Http',
	$get:['$http',function($http){
		return new PT.util.Http({$http:$http});
	}]
});