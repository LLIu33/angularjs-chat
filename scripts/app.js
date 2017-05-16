﻿'use strict';

var app = angular.module('ChatApp', ['ui.router'])

    .run(function($rootScope, $location, $state, LoginService) {

        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                if (!LoginService.isAuthenticated() && toState.name === 'chat') {
                    $state.transitionTo('login');
                    event.preventDefault();
                }
            });
    })
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: './scripts/components/authentication/login.html',
                controller: 'LoginController'
            })
            .state('chat', {
                url: '/',
                templateUrl: './scripts/components/chat/chat.html',
                controller: 'ChatCtrl'
            })
            .state('logout', {
                url: '/logout',
                controller: function($state, LoginService) {
                    LoginService.clearCredentials();
                    $state.transitionTo('login');
                }
            });
    }]);