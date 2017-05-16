﻿'use strict';

angular.module('ChatApp')

    .factory('LoginService', ['$rootScope', '$cookieStore', function($rootScope, $cookieStore) {

        return {
            login: function(username) {
                $rootScope.globals = {
                    currentUser: {
                        username: username,
                    }
                };
                $cookieStore.put('globals', $rootScope.globals);
            },
            isAuthenticated: function() {
                return !!$rootScope.globals.currentUser;
            },
            clearCredentials: function() {
                $cookieStore.remove('globals');
                $rootScope.globals = {};
            }
        };

    }]);