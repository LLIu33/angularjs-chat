angular.module("ChatApp").service("ChatService", chatService);

function chatService($rootScope, $interval, $http) {
  let messages = [];

  return {
    sendMessage: sendMessage,
    getMessages: getMessages,
    usersActivity: usersActivity
  };

  function getMessages() {
    return angular.copy(messages);
  }

  function sendMessage(author, text) {
    const message = {
      text: text,
      author: author,
      time: new Date().toLocaleString()
    };
    messages.push(message);
    $rootScope.$broadcast("messageAdded", message);
  }

  function usersActivity() {
    $interval(function() {
      $http.get("./data/messages.json").then(function(response) {
        if (response.data.length <= 0) {
          return;
        }

        const messageIndex = Math.floor(Math.random() * 3);
        const newMessage = response.data[messageIndex];
        sendMessage(newMessage.author, newMessage.text);
      });
    }, 5000);
  }
}
