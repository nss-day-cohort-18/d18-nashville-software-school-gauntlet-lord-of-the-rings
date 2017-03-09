"use strict";

console.log("LevelsFactory.js is connected");

app.factory("LevelsFactory", function() {

	let levels = [
		{																												//Level 1 Characters
			Fellowship: 	['Frodo', 'Sam'],																	
			Monsters: 		['Orc', 'Orc', 'Orc', 'BlackRider']
		},
		{																												//Level 2 Characters
			Fellowship: 	['Gimli', 'Legolas', 'Aragorn', 'Galdalf'],
			Monsters: 		['Orc', 'Orc', 'Troll', 'Urukhai', 'Dragon']
		},
		{																												//Level 3 Characters
			Fellowship: 	[],																								
			Monsters: 		['Smeagol']
		}
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
		myCurrentLevel.levelCharacters = levels[levelValue];
		myCurrentLevel.backgroundImage = levelBackground[levelValue];
		return myCurrentLevel;
	};

	return {getLevels};

});
