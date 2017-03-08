"use strict";

console.log("WeaponFactory.js is connected");

app.factory("WeaponFactory", function(LOTR) {

	LOTR.Weapons.Weapon = function() {
		this.name = "";
		this.damage = 10;

		this.toString = function() {
    	return this.name + " for " + this.damage + " damage!";
  	};
	};


	LOTR.Weapons.Dagger = function() {
	  this.name = "dagger";
	  this.damage = Math.floor(Math.random() * 5);
	};
	LOTR.Weapons.Dagger.prototype = new LOTR.Weapons.Weapon();


	return (LOTR.Weapons);

});
