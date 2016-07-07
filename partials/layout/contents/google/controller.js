'use strict';

define(['projectWeb'], function () {
	
	var googleModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'googleService', 'layoutService']);
	
	googleModule.controller('googleController', ['$scope', '$ocLazyLoad', 'googleService', 'layoutService',
	                                      	        function($scope, $ocLazyLoad, googleService, layoutService) {
		
		$ocLazyLoad.load([
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
		                  'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',
		                  
		                  'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  googleService.fire();
        	  layoutService.fire();
	    });

		
	}]);//strutsiBatisController.controller
	
});