"use strict";

console.log("WeaponFactory.js is connected");

app.factory("WeaponFactory", function(LOTR) {

	LOTR.Weapons.Weapon = function() {
		this.name = "";
		this.damage = Math.floor(Math.random() * 5);

		this.toString = function() {
    	return this.name + " for " + this.damage + " damage!";
  	};
	};


	let createWeapons = (customWeapon) => {
		return new Promise((resolve, reject) => {
			LOTR.Weapons[customWeapon.variableName] = function() {
				this.name = customWeapon.name;
				this.damage = this.damage + customWeapon.damage;
			};
			LOTR.Weapons[customWeapon.variableName].prototype = new LOTR.Weapons.Weapon();
			resolve(LOTR.Weapons);
		});
	};

	// let createMonsters = (customMonster) => {
	// 	return new Promise((resolve, reject) => {
	// 		LOTR.Combatants.Monsters[customMonster.variableName] = function() {
	// 			this.name = customMonster.name;
	// 			this.health = this.health + customMonster.health;
	// 		};
	// 		LOTR.Combatants.Monsters[customMonster.variableName].prototype = new LOTR.Combatants.Monsters.Monster();
	// 		resolve(LOTR.Combatants.Monsters);
	// 	});
	// };


	return {createWeapons};

});
