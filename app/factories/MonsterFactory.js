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

	LOTR.Combatants.Monsters.Orc = function() {
	  this.health = this.health + 20;
	  this.species = "Orc";
	};
	LOTR.Combatants.Monsters.Orc.prototype = new LOTR.Combatants.Monsters.Monster();


	let myMonsters = [
		{
			name: "Black Rider",
			health: 40,
			species: "Scary Guy",
			variableName: "BlackRider"
		}
	];

	let createMonsters = (customMonster) => {
		LOTR.Combatants.Monsters[customMonster.variableName] = function() {
			this.health = this.health + customMonster.health;
			this.species = customMonster.species;
		};
		LOTR.Combatants.Monsters[customMonster.variableName].prototype = new LOTR.Combatants.Monsters.Monster();
	};

	myMonsters.forEach((monster) => createMonsters(monster));


	return (LOTR.Combatants.Monsters);

});
