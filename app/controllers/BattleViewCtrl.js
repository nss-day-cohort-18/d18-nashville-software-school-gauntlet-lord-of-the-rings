"use strict";

console.log("BattleViewCtrl.js is connected!!");

app.controller("BattleViewCtrl", function($scope, $http, LOTR, LevelsFactory, CurrentStateFactory) {
	let s = $scope;

	let currentLevel = LevelsFactory.getLevels(1);
	console.log("Here is your currentLevel info: ", currentLevel);

	let myCurrentCharacters = currentLevel.levelCharacters;
	console.log("Here is your myCurrentEnemies info: ", myCurrentCharacters);

	let myCurrentEnemies = myCurrentCharacters.Monsters;

	let myWeapon = new LOTR.Weapons.Dagger();
	console.log("Here is myWeapon: ", myWeapon);

	let myMonster = new LOTR.Combatants.Monsters[myCurrentEnemies[0]]();
	console.log("Here is myMonster: ", myMonster);
		
});