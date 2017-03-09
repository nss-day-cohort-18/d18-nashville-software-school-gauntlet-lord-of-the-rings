"use strict";

console.log("ChoosePlayerCtrl.js is connected!!");

app.controller("ChoosePlayerCtrl", function($scope, CurrentStateFactory, LevelsFactory, LOTR) {
	
	let s = $scope;

	//get level info:

	s.level = CurrentStateFactory.getCurrentStatus().myCurrentLevel;
	// console.log('s.level:', s.level);
	s.levelMessage = CurrentStateFactory.getCurrentStatus().myCurrentLevel.message;
	// console.log('s.levelMessage:', s.levelMessage);

	let levelInfo = LevelsFactory.getLevels(s.level.number),
	// console.log('levelInfo:', levelInfo);


	 monsters = levelInfo.levelCharacters.Monsters,
	// console.log('monsters:', monsters);
	 fellows = levelInfo.levelCharacters.Fellowship,
	// console.log('fellows:', fellows);


	//set enemy and fellowship
     CurrentMonsters = CurrentStateFactory.setCurrentStatus('myCurrentMonsters', monsters),
    // console.log('myCurrentMonsters set to:', CurrentMonsters);
     CurrentFellowship = CurrentStateFactory.setCurrentStatus('myCurrentFellowship', fellows);
    // console.log('myCurrentFellowship set to:', CurrentFellowship);

    //instantiate new fellows
	s.fellowship = fellows.map((fellow)=> new LOTR.Combatants.Fellowship[fellow]());
	// console.log('fellowship objectified:', s.fellowship);


    //send forth:
    s.sendForth = function(fellow){
    	console.log('sent Forth:', fellow);
    	CurrentStateFactory.setCurrentStatus('myCurrentHero', fellow);
    	let currentHero = CurrentStateFactory.getCurrentStatus().myCurrentHero;
    	// console.log('current hero set to:', currentHero);
    	CurrentStateFactory.setFightingStatus(true);
    	// let isFighting = CurrentStateFactory.getFightingStatus();
    	// console.log('is fighting?', isFighting);
    };





		
});