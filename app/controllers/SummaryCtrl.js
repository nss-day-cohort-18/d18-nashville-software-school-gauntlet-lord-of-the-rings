"use strict";

console.log("SummaryCtrl.js is connected!!");

app.controller("SummaryCtrl", function($scope, $location, $window, LevelsFactory, CurrentStateFactory) {
	let s = $scope;

	let myCurrentStatus = CurrentStateFactory.getCurrentStatus();
	s.stats = [
		{'Level: ' 				: myCurrentStatus.myCurrentLevel+1},
		{'Fellowship: '			: myCurrentStatus.myCurrentFellowship},
		{'Heros Slain: '		: myCurrentStatus.herosSlain.length ? myCurrentStatus.herosSlain.length : 'None!'},
		{'Monsters Slain: '		: myCurrentStatus.monstersSlain.length ? myCurrentStatus.monstersSlain.length : 'None!'},
		{'My Current Hero: '	: myCurrentStatus.myCurrentHero}
	];

	if (myCurrentStatus.myCurrentFellowship.length === 0) {
		s.continue = false;
	} else {
		s.continue = true;
	}

	s.playAgain = () => {
		CurrentStateFactory.resetGame();
		$location.path('/ChoosePlayer');		
	};

	s.nextLevel = () => {
		let nextLevel = myCurrentStatus.myCurrentLevel+1;
		CurrentStateFactory.setCurrentStatus('myCurrentLevel', nextLevel);
		CurrentStateFactory.setCurrentStatus('myCurrentEnemy', null);
		$location.path('/ChoosePlayer');
	};
		
});