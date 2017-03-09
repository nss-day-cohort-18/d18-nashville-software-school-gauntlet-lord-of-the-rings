"use strict";

console.log("LevelsFactory.js is connected");

app.factory("LevelsFactory", function() {

	let levels = [
		{																												//Level 1 Characters
			Fellowship: 	['Frodo', 'Sam'],																	
			Monsters: 		['Orc', 'Orc', 'Orc', 'Ringraith']
		},
		{																												//Level 2 Characters
			Fellowship: 	['Gimli', 'Legolas', 'Aragorn', 'Galdalf','Frodo'],
			Monsters: 		['Orc', 'Orc', 'Cave Troll', 'Uruk-hai', 'Fellbeast']
		},
		{																												//Level 3 Characters
			Fellowship: 	['Frodo'],																								
			Monsters: 		['Smeagol']
		}
	];

	let levelBackground = [
			'levelOne.jpg',
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
