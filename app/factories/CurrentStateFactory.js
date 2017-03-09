"use strict";

console.log("CurrentStateFactory.js is connected");

app.factory("CurrentStateFactory", function() {



	let myStatus = {
		myCurrentLevel: 0,
		myCurrentHero: null,
		myCurrentEnemy: null,
		myCurrentMonsters: null,
		myCurrentFellowship: null,
		myCurrentPoints: 0		
	};

	let getCurrentStatus = () => myStatus;
	let	setCurrentStatus = ( myStatusKey, myStatusValue ) => myStatus[myStatusKey] = myStatusValue;

	let killMonster = () => {
		myStatus.myCurrentMonsters.splice(0, 1);
		return myStatus.myCurrentMonsters;
	};

	return {
		getCurrentStatus,
		setCurrentStatus,
		killMonster
	};

});
