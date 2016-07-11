
fido = angular.module('fideligard', ['ui-router']);

fido.config( function( $stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/stocks');


});