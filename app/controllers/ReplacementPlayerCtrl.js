"use strict";

console.log("ReplacementPlayerCtrl.js is connected!!");

app.controller("ReplacementPlayerCtrl", function($scope, $location, CurrentStateFactory, LevelsFactory) {
	let s = $scope;

	s.players = CurrentStateFactory.getCurrentStatus().myCurrentFellowship;

	s.sendForth = (player) => {
		CurrentStateFactory.setCurrentStatus('myCurrentHero', player);
		CurrentStateFactory.sendOffHero(player);
		$location.path('/BattleView');
	};

});