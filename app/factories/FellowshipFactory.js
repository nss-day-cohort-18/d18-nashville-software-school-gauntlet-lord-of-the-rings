"use strict";

console.log("FellowshipFactory.js is connected");

app.factory("FellowshipFactory", function(LOTR) {

	LOTR.Combatants.Fellowship.Hero = function() {
		this.name = "";
		this.health = 50;
		this.toString = function() {
    	return "My name is " + this.name + " and I have  " + this.health + " health!";
  	};
	};

	let createFellowship = (customHero) => {
		return new Promise((resolve, reject) => {
			LOTR.Combatants.Fellowship[customHero.variableName] = function() {
				this.name = customHero.name;
				this.health = this.health + customHero.health;
				this.weapon = customHero.weapon;
			};
			LOTR.Combatants.Fellowship[customHero.variableName].prototype = new LOTR.Combatants.Fellowship.Hero();
			resolve(LOTR.Combatants.Fellowship);
		});
	};

	return {createFellowship};
	
});
