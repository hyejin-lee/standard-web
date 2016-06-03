define([
	'angular',
	'require',
	'angularRoute',
	'view1/view1',
	'view2/view2'
], function(angular, require, jQuery) {
	
	// Declare app level module which depends on views, and components
	return angular.module('projectWeb', [
		'ngRoute',
		'projectWeb.view1',
		'projectWeb.view2'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);
	
	$(document).ready(function () {
		console.log('index jquery Fire');
	});
});

