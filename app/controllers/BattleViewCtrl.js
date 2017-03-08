"use strict";

console.log("BattleViewCtrl.js is connected!!");

app.controller("BattleViewCtrl", function($scope, LOTR, WeaponFactory, MonsterFactory, LevelsFactory) {
	let s = $scope;

	let currentLevel = LevelsFactory.getLevels(1);

	let myCurrentEnemies = currentLevel.levelEnemies;

	let myWeapon = new LOTR.Weapons.Dagger();
	let myMonster = new LOTR.Combatants.Monsters[myCurrentEnemies[0]]();


	console.log("Here is my weapon: ", myWeapon);
	console.log("Here is my Monster: ", myMonster);
	console.log(LOTR);
		
});