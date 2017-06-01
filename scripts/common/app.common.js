import angular from "angular";
import AudioService from "./AudioService";

const commonModule = angular.module("app.common", [AudioService]).name;

export default commonModule;
