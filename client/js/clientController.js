var countryApp = angular.module('countryApp', []);
      countryApp.controller('CountryCtrl', function ($scope, $http){
        $http.get('../../data/utilization.json').success(function(data) {
          $scope.countries = data;
        });
        $scope.sortField = 'population';
        $scope.reverse = false;
		
        $scope.setSelected = function() {
       	if ($scope.lastSelected) {
         $scope.lastSelected.selected = '';
       	}
       	this.selected = 'selected';    	
       	$scope.lastSelected = this;
       	} 	   

      });