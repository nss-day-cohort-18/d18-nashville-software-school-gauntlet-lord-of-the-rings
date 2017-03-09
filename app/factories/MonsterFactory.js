"use strict";

console.log("MonsterFactory.js is connected");

app.factory("MonsterFactory", function(LOTR) {

	LOTR.Combatants.Monsters.Monster = function() {
		this.name = "";
		this.health = 10;
		this.toString = function() {
    	return "My name is " + this.name + " and I have  " + this.health + " health!";
  	};
	};

	let createMonsters = (customMonster) => {
		return new Promise((resolve, reject) => {
			LOTR.Combatants.Monsters[customMonster.variableName] = function() {
				this.name = customMonster.name;
				this.health = this.health + customMonster.health;
				this.weapon = customMonster.weapon; 
			};
			LOTR.Combatants.Monsters[customMonster.variableName].prototype = new LOTR.Combatants.Monsters.Monster();
			resolve(LOTR.Combatants.Monsters);
		});
	};

	return {createMonsters};

});
