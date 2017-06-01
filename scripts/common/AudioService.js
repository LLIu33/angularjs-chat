import angular from "angular";

angular.module("ChatApp").service("AudioService", AudioService);

function AudioService() {
  const audio = new Audio("media/notification.wav");

  return {
    playAudio: audio.play.bind(audio)
  };
}
