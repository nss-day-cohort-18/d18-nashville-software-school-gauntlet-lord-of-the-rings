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


	return (LOTR.Combatants);

});
