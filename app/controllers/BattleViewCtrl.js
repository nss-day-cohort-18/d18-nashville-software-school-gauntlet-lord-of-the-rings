"use strict";

console.log("BattleViewCtrl.js is connected!!");

app.controller("BattleViewCtrl", function($scope, $http, $location, $timeout, LOTR, LevelsFactory, CurrentStateFactory) {
	let s = $scope;
	let LevelStatus = CurrentStateFactory.getCurrentStatus();

	let myPlayer = {
		name: "player",
		health: 50,
		weapon: {
			name: "Dagger",
			damage: 10
		}
	};

	let myMonster = {
		name: "monster",
		health: 50,
		weapon: {
			name: "Axe",
			damage: 20
		}
	};

	s.player = myPlayer;
	s.monster = myMonster;	
	// s.monster = new LOTR.Combatants.Monsters[LevelStatus.myCurrentMonsters[0]]();

	let currentLevel = LevelStatus.myCurrentLevel;
			// playerWeapon 		= new LOTR.Weapons[s.player.weapon](),
			// monsterWeapon 	= new LOTR.Weapons[s.monster.weapon]();
			
	console.log("Here is your currentLevel info: ", LevelStatus);

	s.attack = () => {
		console.log("You are attacking");
		if (s.monster.health - s.player.weapon.damage <= 0) {
			s.monster.health = 0;
			console.log("Your monster is supposed to be dead.");
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























