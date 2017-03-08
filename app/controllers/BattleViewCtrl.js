"use strict";

console.log("BattleViewCtrl.js is connected!!");

app.controller("BattleViewCtrl", function($scope, LOTR, WeaponFactory, MonsterFactory) {
	let s = $scope;

	let myWeapon = new LOTR.Weapons.Dagger();
	let currentMonster = new LOTR.Combatants.Monsters.Orc();

	console.log("Here is my weapon: ", myWeapon);
	console.log("Here is my Monster: ", currentMonster);
		
});