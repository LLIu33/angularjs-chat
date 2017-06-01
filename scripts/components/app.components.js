import angular from "angular";
import Home from "./chat/ChatCtrl";
import About from "./authentication/LoginCtrl";

const componentModule = angular.module("app.components", [Home, About]).name;

export default componentModule;
