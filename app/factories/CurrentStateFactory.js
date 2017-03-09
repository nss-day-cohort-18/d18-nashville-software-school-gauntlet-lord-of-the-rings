"use strict";

console.log("CurrentStateFactory.js is connected");

app.factory("CurrentStateFactory", function() {

	let myStatus = {
		myCurrentLevel: 0,
		message: ["You're not in The Shire Anymore! 3 Orcs Have Tracked you down at the Prancing Pony!"],
		myCurrentHero: null,
		myCurrentEnemy: null,
		myCurrentMonsters: null,
		myCurrentFellowship: null,
		myCurrentPoints: 0		
	};

	let fighting = false;

	let getFightingStatus = () => fighting;
	let setFightingStatus = (boolean) => fighting = boolean;

	let getCurrentStatus = () => myStatus;
	let	setCurrentStatus = ( myStatusKey, myStatusValue ) => myStatus[myStatusKey] = myStatusValue;

	return {
		getCurrentStatus,
		setCurrentStatus,
		getFightingStatus,
		setFightingStatus
	};

});
