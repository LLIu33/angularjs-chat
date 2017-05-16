'use strict';

angular.module('ChatApp')

    .controller('ChatCtrl', ['$scope', '$interval', '$http', '$rootScope',
        function($scope, $interval, $http, $rootScope) {
            $scope.messages = [];
            $scope.name = $rootScope.globals.currentUser.username;
            $scope.sendMessage = function() {
                if ($scope.messageText) {
                    var message = {
                        text: this.messageText,
                        author: this.name,
                        time: new Date().toLocaleString()
                    }
                    $scope.messages.push(message);
                    $scope.messageText = "";
                }
            };

            $scope.$watchCollection('messages', function(newValues, oldValues) {
              if (newValues.length > oldValues.length) {
                $scope.playAudio();
              }
            });

            $scope.playAudio = function() {
                var audio = new Audio('media/notification.wav');
                audio.play();
            };

            $interval(function() {
                $http.get('./data/messages.json').then(successCallback, errorCallback);
            }, 5000);

            function successCallback(response) {
                var data = response.data;
                if (data.length > 0) {
                    var messageIndex = Math.floor(Math.random() * 3);
                    var newMessage = data[messageIndex];
                    newMessage.time = new Date().toLocaleString();
                    $scope.messages.push(newMessage);
                }
            }

            function errorCallback(error) {
                // log error
            }

        }
    ]);