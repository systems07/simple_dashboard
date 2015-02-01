var countryApp = angular.module('countryApp', []);
      countryApp.controller('CountryCtrl', function ($scope, $http){
        $http.get('../../data/countries.json').success(function(data) {
          $scope.countries = data;
        });
        $scope.sortField = 'population';
        $scope.reverse = true;
      });