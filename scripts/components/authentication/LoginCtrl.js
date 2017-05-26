angular
  .module("ChatApp")
  .controller("LoginCtrl", function($state, AuthService) {
    let auth = this;
    auth.username = "";
    auth.formSubmit = formSubmit;

    function formSubmit() {
      AuthService.login(auth.username);
      auth.error = "";
      auth.username = "";
      $state.transitionTo("chat");
    }
  });
