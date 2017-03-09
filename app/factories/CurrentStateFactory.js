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

	let killPlayer = (playerName) => {
		function findPlayer(player) {
			return player.name === playerName;
		}
		let myPlayer = myStatus.myCurrentFellowship.find(findPlayer);
		console.log(myPlayer);
		return myStatus.myCurrentFellowship;
	};

	return {
		getCurrentStatus,
		setCurrentStatus,
		killMonster,
		killPlayer
	};

});
