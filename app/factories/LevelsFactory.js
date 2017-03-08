"use strict";

console.log("LevelsFactory.js is connected");

app.factory("LevelsFactory", function() {

	let levels = [
			['Orc', 'Orc', 'Orc'],
			['BlackRider', 'Orc', 'BlackRider'],
			['Orc', 'BlackRider', 'Orc', 'Troll']
	];

	let levelBackground = [
			'levelOne.jpeg',
			'levelTwo.jpg',
			'levelThree.jpg',
			'levelFour.jpg',
			'levelFive.jpg',
			'levelSix.jpg',
			'levelSeven.jpg',
			'levelEight.jpg',
			'levelNine.jpg',
			'levelTen.jpg',
	];

	let getLevels = (levelValue) => {
		let myCurrentLevel = {};
		myCurrentLevel.levelEnemies = levels[levelValue];
		myCurrentLevel.backgroundImage = levelBackground[levelValue];
		return myCurrentLevel;
	};

	return {getLevels};

});
