'use strict';


require.config({
	
	paths: {
		jquery: '../../bower_components/jquery/dist/jquery',

		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
		
		text: '../../bower_components/requirejs-text/text'
	},
	
	shim: {
		'angular' : {
			'exports' : 'angular'
		},
		'angularRoute': {
			deps:['angular']
		},
		'jquery': {
			deps:['angular']
		},
	}
	

});


require([
	'angular',
	'jquery',
	'text',
	'index',
	'angularRoute'
	], function(angular, $, text) {
		angular.element().ready(function() {
			angular.bootstrap(document, ['projectWeb']);
		});
		$(document).ready(function () {
<<<<<<< HEAD
			alert('jquery Fire~!');
=======
			console.log('jquery Fire~!');
>>>>>>> 3d3d2f379db66cb48324337f02c5b7959360eee9
		});
	}
);