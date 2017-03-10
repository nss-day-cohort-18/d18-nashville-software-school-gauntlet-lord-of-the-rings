"use strict";

console.log("BattleViewCtrl.js is connected!!");

app.controller("BattleViewCtrl", function($scope, $http, $location, $timeout, LOTR, LevelsFactory, CurrentStateFactory) {
	let s = $scope;
	let myCurrentStatus = CurrentStateFactory.getCurrentStatus();
	
	let myCurrentLevel = LevelsFactory.getLevels(myCurrentStatus.myCurrentLevel);

	s.levelBackgroundImage = myCurrentLevel.backgroundImage;

	s.player = myCurrentStatus.myCurrentHero;
	s.monster = new LOTR.Combatants.Monsters[myCurrentStatus.myCurrentMonsters[0]]();	

	let myMonstersWeapon = new LOTR.Weapons[s.monster.weapon]();
	let myPlayerWeapon = new LOTR.Weapons[s.player.weapon]();	

	s.player.weapon = myPlayerWeapon;
	s.monster.weapon = myMonstersWeapon;

	console.log("Here are my Combatants: ", s.player, s.monster);

	//let currentLevel = LevelStatus.myCurrentLevel;
			// playerWeapon 		= new LOTR.Weapons[s.player.weapon](),
			// monsterWeapon 	= new LOTR.Weapons[s.monster.weapon]();
			
	//console.log("Here is your currentLevel info: ", LevelStatus);

	s.attack = () => {
		console.log("You are attacking");
		if (s.monster.health - s.player.weapon.damage <= 0) {
			s.monster.health = 0;
			let myMonsterArray = CurrentStateFactory.killMonster();
			console.log(myMonsterArray);
			s.monster = new LOTR.Combatants.Monsters[myMonsterArray[0]]();
			s.monster.weapon = new LOTR.Weapons[s.monster.weapon]();
			if (myMonsterArray.length === 0) {
				alert("You just beat all the monsters");
				console.log("Your monster is supposed to be dead.");
			}
			// $location.path('/Summry');
		} else {
			s.monster.health -= s.player.weapon.damage;
			console.log("Here is your monster's health: ", s.monster.health);
			$timeout(function() {
				if (s.player.health - s.monster.weapon.damage <= 0) {
					s.player.health = 0;
					CurrentStateFactory.killPlayer(s.player.name);
					console.log("Your player is supposed to be dead: ", s.player.health);
				} else {
					s.player.health -= s.monster.weapon.damage;
					console.log("Here is your player's health: ", s.player.health);
				}
			}, 1000);
		}
	};

	
		
});























