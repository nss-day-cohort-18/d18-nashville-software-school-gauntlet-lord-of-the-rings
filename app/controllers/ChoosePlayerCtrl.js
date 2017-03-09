"use strict";

console.log("ChoosePlayerCtrl.js is connected!!");

app.controller("ChoosePlayerCtrl", function($scope, CurrentStateFactory, LevelsFactory, LOTR) {
	
	let s = $scope;


	//get level info:

	s.level = CurrentStateFactory.getCurrentStatus().myCurrentLevel;
	s.levelMessage = CurrentStateFactory.getCurrentStatus().message[s.level];

	let levelInfo = LevelsFactory.getLevels(s.level),
		monsters = levelInfo.levelCharacters.Monsters,
		fellows = levelInfo.levelCharacters.Fellowship,

	 //set enemy and fellowship
     CurrentMonsters = CurrentStateFactory.setCurrentStatus('myCurrentMonsters', monsters),
     CurrentFellowship = CurrentStateFactory.setCurrentStatus('myCurrentFellowship', fellows);

    //instantiate new fellows
	s.fellowship = fellows.map((fellow)=> new LOTR.Combatants.Fellowship[fellow]());

    //send forth player (set current hero, fighting status)
    s.sendForth = function(fellow){
    	CurrentStateFactory.setCurrentStatus('myCurrentHero', fellow);
    	let currentHero = CurrentStateFactory.getCurrentStatus().myCurrentHero;
    	CurrentStateFactory.setFightingStatus(true);
    };
		
});