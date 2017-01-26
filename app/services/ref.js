angular.module('refs').service('Ref',['$http', '$resource',
	function($http,$resource)
	{
		var ref = {};
	 	ref.items = function(){
		     	return $http.get("ressources/refs.csv",{headers : {'Content-Type' : 'text/csv; charset=UTF-8'}}	
		)} ;
		return ref;	
	}
]);