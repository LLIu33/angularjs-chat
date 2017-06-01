// angular
//   .module("ChatApp", ["ui.router", "ngCookies"])
//   .run(function($rootScope, $location, $state, $cookieStore, AuthService) {
//     $rootScope.$on("$stateChangeStart", function(
//       event,
//       toState,
//       toParams,
//       fromState,
//       fromParams
//     ) {
//       $rootScope.globals = $cookieStore.get("globals") || {};
//       if (!AuthService.isAuthenticated() && toState.name === "chat") {
//         $state.transitionTo("login");
//         event.preventDefault();
//       }
//     });
//   })
//   .config([
//     "$stateProvider",
//     "$urlRouterProvider",
//     function($stateProvider, $urlRouterProvider) {
//       $urlRouterProvider.otherwise("/");
//
//       $stateProvider
//         .state("login", {
//           url: "/login",
//           templateUrl: "./scripts/components/authentication/login.html",
//           controller: "LoginCtrl",
//           controllerAs: "auth"
//         })
//         .state("chat", {
//           url: "/",
//           templateUrl: "./scripts/components/chat/chat.html",
//           controller: "ChatCtrl",
//           controllerAs: "chat"
//         })
//         .state("logout", {
//           url: "/logout",
//           controller: function($state, AuthService) {
//             AuthService.clearCredentials();
//             $state.transitionTo("login");
//           }
//         });
//     }
//   ]);

import angular from "angular";
import uiRouter from "angular-ui-router";
import Common from "./common/app.common";
import Components from "./components/app.components";
import AppComponent from "./app.component";
// import "normalize.css";

angular
  .module("app", [uiRouter, Common, Components])
  .component("app", AppComponent);
