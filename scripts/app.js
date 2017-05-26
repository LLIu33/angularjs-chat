angular
  .module("ChatApp", ["ui.router", "ngCookies"])
  .run(function($rootScope, $location, $state, $cookieStore, AuthService) {
    $rootScope.$on("$stateChangeStart", function(
      event,
      toState,
      toParams,
      fromState,
      fromParams
    ) {
      $rootScope.globals = $cookieStore.get("globals") || {};
      if (!AuthService.isAuthenticated() && toState.name === "chat") {
        $state.transitionTo("login");
        event.preventDefault();
      }
    });
  })
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state("login", {
          url: "/login",
          templateUrl: "./scripts/components/authentication/login.html",
          controller: "LoginCtrl",
          controllerAs: "auth"
        })
        .state("chat", {
          url: "/",
          templateUrl: "./scripts/components/chat/chat.html",
          controller: "ChatCtrl",
          controllerAs: "chat"
        })
        .state("logout", {
          url: "/logout",
          controller: function($state, AuthService) {
            AuthService.clearCredentials();
            $state.transitionTo("login");
          }
        });
    }
  ]);
