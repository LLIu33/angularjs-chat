'use strict';

angular.module('ChatApp')

    .factory('LoginService', ['$rootScope', function($rootScope) {
        var isAuthenticated = false;

        return {
            login: function(username) {
                isAuthenticated = true;
                $rootScope.globals = {
                    currentUser: {
                        username: username,
                    }
                };
                return isAuthenticated;
            },
            isAuthenticated: function() {
                return isAuthenticated;
            },
            clearCredentials: function() {
                isAuthenticated = false;
                $rootScope.globals = {};
            }
        };

    }]);