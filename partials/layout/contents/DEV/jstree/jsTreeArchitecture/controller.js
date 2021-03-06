'use strict';

define(
		['projectWeb'
		],
		function() {

			var jsTreeArchitectureModule = angular.module('projectWeb', [
					'ui.router', 'oc.lazyLoad', 'jsTreeArchitectureService',
					'devLayoutService'
			]);

			jsTreeArchitectureModule.controller('jsTreeArchitectureHeaderController', [
					'$scope',
					'$rootScope',
					'$ocLazyLoad',
					'jsTreeArchitectureService',
					'devLayoutService',
					function($scope, $rootScope, $ocLazyLoad,
							jsTreeArchitectureService, devLayoutService) {

						$scope.broadcastGoToHome = function() {
							$rootScope.$broadcast('goToHome');
						};

					}
			]);// jsTreeArchitectureHeaderController.controller

			jsTreeArchitectureModule
					.controller(
							'jsTreeArchitectureController',
							[
									'$scope',
									'$ocLazyLoad',
									'jsTreeArchitectureService',
									'devLayoutService',
									function($scope, $ocLazyLoad,
											jsTreeArchitectureService,
											devLayoutService) {

										$ocLazyLoad
												.load(
														[
																'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
																'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
																'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',

																'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
																'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
																'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

														]).then(
														function() {
															jsTreeArchitectureService
																	.fire();
															devLayoutService
																	.fire();
														});

									}
							]);// strutsiBatisController.controller

		});
