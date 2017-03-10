"use strict";

console.log("ChoosePlayerCtrl.js is connected!!");

app.controller("ChoosePlayerCtrl", function($scope, CurrentStateFactory, LevelsFactory, LOTR) {
	
	let s = $scope;


	//get level info:

	s.level = CurrentStateFactory.getCurrentStatus().myCurrentLevel;

	let levelInfo = LevelsFactory.getLevels(s.level),
			monsters = levelInfo.levelCharacters.Monsters.map((monster) => {
									monster = new LOTR.Combatants.Monsters[monster]();
									let monsterWeapon = new LOTR.Weapons[monster.weapon]();
									monster.weapon = monsterWeapon;
									return monster;
			}),
			fellows = levelInfo.levelCharacters.Fellowship.map((fellow) => {
									fellow = new LOTR.Combatants.Fellowship[fellow]();
									let fellowWeapon = new LOTR.Weapons[fellow.weapon]();
									fellow.weapon = fellowWeapon;
									return fellow;
			});

	console.log("Here is your level info: ", levelInfo);

	//set enemy and fellowship
	CurrentStateFactory.setCurrentStatus('myCurrentMonsters', monsters);
	CurrentStateFactory.setCurrentStatus('myCurrentFellowship', fellows);

	let myLevelStats = CurrentStateFactory.getCurrentStatus();
	s.levelMessage = levelInfo.levelDetails.message;
  //instantiate new fellows
	s.fellowship = myLevelStats.myCurrentFellowship;
	// .map((fellow)=> new LOTR.Combatants.Fellowship[fellow]());

  //send forth player (set current hero, fighting status)
  s.sendForth = function(fellow){
  	CurrentStateFactory.setCurrentStatus('myCurrentHero', fellow);
  	CurrentStateFactory.sendOffHero(fellow);
  	CurrentStateFactory.setFightingStatus(true);
  };
		
});





