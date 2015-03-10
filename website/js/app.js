var mApp = angular.module("myapp", ["ngRoute", "ngAnimate", 
	"mControllers", "mDirectives", "mFilters", "mRoutes", "mServices"])

mApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/index.html',
		controller: 'indexCtrl'
	}).when('/search', {
		templateUrl: 'templates/search.html',
		controller: 'searchCtrl'
	}).otherwise({
		redirectTo: '/'
	})

})