'use strict';

angular.module('ChatApp')

.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $scope.formSubmit = function() {
        LoginService.login($scope.username);
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('chat');
};

});