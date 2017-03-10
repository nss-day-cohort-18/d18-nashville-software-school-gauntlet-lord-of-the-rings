"use strict";

console.log("BattleViewCtrl.js is connected!!");

app.controller("BattleViewCtrl", function($scope, $http, $location, $timeout, LOTR, LevelsFactory, CurrentStateFactory) {
	let s = $scope;
	let myCurrentStatus = CurrentStateFactory.getCurrentStatus();
	let myCurrentLevel = LevelsFactory.getLevels(myCurrentStatus.myCurrentLevel);

	/*
		Grab current status of the game, as well as the Level information.
	*/

	s.levelBackgroundImage = myCurrentLevel.levelDetails.image;
	
	//Initialize my characters and their weapons
	if (myCurrentStatus.myCurrentEnemy !== null) {
		console.log(myCurrentStatus.myCurrentEnemy);
	} else {
		CurrentStateFactory.setCurrentStatus('myCurrentEnemy', myCurrentStatus.myCurrentMonsters[0]);
	}

	s.player = myCurrentStatus.myCurrentHero;
	s.monster = CurrentStateFactory.getCurrentStatus().myCurrentEnemy;

	console.log("Here is myCurrentStatus: ", myCurrentStatus);
	console.log("Here are my Combatants: ", s.player, s.monster);

	s.attack = () => { 
		console.log("You are attacking");


		//If you kill a monster
		if (s.monster.health - s.player.weapon.damage <= 0) {
			s.monster.health = 0;
			console.log("You just killed a fucking ", s.monster.name);

			//Check for any other monsters on the level
			let myMonsterArray = CurrentStateFactory.killMonster(s.monster);
			console.log(myMonsterArray);
			//If all the monsters are dead
			if (myMonsterArray.length === 0) {
				alert("You just beat all the monsters");
				CurrentStateFactory.setFightingStatus(false);
				CurrentStateFactory.bringBackHero(s.player);
				$location.path('/Summary');

			//Else, create a new monster
			} else {
				s.monster = myMonsterArray[0];	
				CurrentStateFactory.setCurrentStatus('myCurrentEnemy', s.monster);
			}

		//If the monster lives on
		} else {
			//Subtract from the monster's health the damage value of s.player.weapon
			s.monster.health -= s.player.weapon.damage;
			console.log("Here is your monster's health: ", s.monster.health);
			//Set a timeout to wait for the monster to fight back
			$timeout(function() {

				//If s.player dies..
				if (s.player.health - s.monster.weapon.damage <= 0) {
					s.player.health = 0;
					let myCurrentFighter = CurrentStateFactory.getCurrentStatus().myCurrentHero;
					alert(myCurrentFighter.name + " just died!!");
					CurrentStateFactory.killPlayer(myCurrentFighter);
					console.log("Your player is supposed to be dead: ", s.player.health);
					$location.path('/Replacement');
				//If player lives on!
				} else {
					s.player.health -= s.monster.weapon.damage;
					console.log("Here is your player's health: ", s.player.health);
				}
			}, 1000);
		}
	};

	
		
});













