"use strict";

console.log("BattleViewCtrl.js is connected!!");

app.controller("BattleViewCtrl", function($scope, $http, LOTR, LevelsFactory, CurrentStateFactory) {
	let s = $scope;

	let currentLevel = LevelsFactory.getLevels(1);
	console.log("Here is your currentLevel info: ", currentLevel);

	let myCurrentEnemies = currentLevel.levelEnemies;
	console.log("Here is your myCurrentEnemies info: ", myCurrentEnemies);

	let myWeapon = new LOTR.Weapons.Dagger();
	console.log("Here is myWeapon: ", myWeapon);

	let myMonster = new LOTR.Combatants.Monsters[myCurrentEnemies[0]]();
	console.log("Here is myMonster: ", myMonster);
		
});