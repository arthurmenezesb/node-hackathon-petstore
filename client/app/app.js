(function () {

	"use strict"
	
	angular.module('hackathon-pet', ['ngRoute', 'ngResource']).config(['$routeProvider', config]);

	function config($routeProvider) {

		$routeProvider.when('/', {
			templateUrl: 'petview.html',
			controller: 'PetController',
			controllerAs: 'petController'
		}).otherwise({
			redirectTo: '/'
		});
	}

})();