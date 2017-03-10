"use strict";

console.log("CurrentStateFactory.js is connected");

app.factory("CurrentStateFactory", function() {



	let myStatus = {
		myCurrentLevel: 0,
		myCurrentHero: null,
		myCurrentEnemy: null,
		myCurrentMonsters: [],
		myCurrentFellowship: [],
		myCurrentPoints: 0,
		monstersSlain: [],
		herosSlain: []	
	};

	let fighting = false;

	let getFightingStatus = () => fighting;
	let setFightingStatus = (boolean) => fighting = boolean;

	let getCurrentStatus = () => myStatus;
	let	setCurrentStatus = ( myStatusKey, myStatusValue ) => {
		if (myStatusKey === 'myCurrentFellowship') {
			myStatusValue.forEach((hero) => myStatus[myStatusKey].push(hero));
		} else {
			myStatus[myStatusKey] = myStatusValue;			
		}
	};

	let killMonster = (monsterSlain) => {
		myStatus.monstersSlain.push(monsterSlain);
		myStatus.myCurrentMonsters.splice(0, 1);
		return myStatus.myCurrentMonsters;
	};

	let killPlayer = (currentFighter) => {
		function findPlayer(player) {
			return player !== currentFighter;
		}
		myStatus.myCurrentFellowship = myStatus.myCurrentFellowship.filter(findPlayer);
		console.log(currentFighter);
		console.log(myStatus.myCurrentFellowship);
		return myStatus.myCurrentFellowship;
	};

	let sendOffHero = (hero) => {
		return myStatus.myCurrentFellowship.splice(myStatus.myCurrentFellowship.indexOf(hero), 1);
	};
	let bringBackHero = (hero) => {
		return myStatus.myCurrentFellowship.push(hero);
	};

	let resetGame = () => {
		myStatus.myCurrentLevel = 0;
		myStatus.myCurrentHero = null;
		myStatus.myCurrentEnemy = null;
		myStatus.myCurrentMonsters = [];
		myStatus.myCurrentFellowship = [];
		myStatus.myCurrentPoints = 0;
		myStatus.monstersSlain = [];
		myStatus.herosSlain = [];
	};

	return {
		getCurrentStatus,
		setCurrentStatus,
		killMonster,
		killPlayer,
		getFightingStatus,
		setFightingStatus,
		sendOffHero,
		bringBackHero,
		resetGame
	};

});
