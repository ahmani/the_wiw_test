angular.module('refs').controller('RefsController',
	['$scope', '$http', 'Ref', '$mdDialog',
	function($scope,$http, Ref, $mdDialog ){
		$scope.lists = [];
		$scope.headers = [];

		$scope.gridOptions = {
            data: [],
            urlSync: false
        };

    	Ref.items().then(function(response) {
			$scope.headers = CSVToArray(response.data,';')[0];
			CSVToArray(response.data,';').forEach(function(d){
					$scope.lists.push(d);
			})
		});

		$scope.details = function(ev,ref)
		{
			$scope.element = [];
			$scope.lists.forEach(function(d){
					if(d[0] === ref)
					{
						$scope.element = d;
					}
			});
			$mdDialog.show({
				  scope: $scope.$new(),
			      templateUrl: 'reference_detail.tmpl.html',
			      parent: angular.element(document.body),
			      clickOutsideToClose:true,
			      targetEvent: ev,
		    })
		}
		$scope.cancel = function() {
	      $mdDialog.cancel();
	    };

	}
	]);