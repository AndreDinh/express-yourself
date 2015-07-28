'user strict';

require('angular/angular');
require('angular-route/angular-route');

var blogPosting = angular.module('blogPosting', ['ngRoute']);


//controler
require("./BlogPost/Controllers/postingController.js")(blogPosting);

// services
// require('./services/resourceServices.js')(blogPosting);

//directives
require('./directives/newPostDirective.js')(blogPosting);


	blogPosting.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/newSubmit', {
			templateUrl: '/templates/showData.html',
			controller: 'postingController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);
