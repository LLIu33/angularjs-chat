angular.module("ChatApp").controller("ChatCtrl", [
  "$scope",
  "ChatService",
  "AudioService",
  "AuthService",
  function($scope, ChatService, AudioService, AuthService) {
    let chat = this;
    chat.messages = ChatService.getMessages();
    let userinfo = AuthService.getUserInfo();
    chat.name = userinfo.name;
    chat.submitMessage = submitMessage;

    ChatService.usersActivity();

    $scope.$on("messageAdded", function(event, message) {
      console.log(message);
      chat.messages.push(message);
    });

    function submitMessage() {
      ChatService.sendMessage(chat.name, chat.messageText);
      chat.messageText = "";
    }
  }
]);
