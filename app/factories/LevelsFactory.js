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

	let levelDetails = [
		{ 
			image: 	  'levelOne.jpg',
			message:  'ONE DOES NOT SIMPLY WALK INTO MORDOR.'
		},
		{ 
			image: 	  'levelTwo.jpg',
			message:  'THERES SOME GOOD IN THIS WORLD, MR. FRODO...AND THATS WORTH FIGHTING FOR.'
		},
		{ 
			image: 	  'levelThree.jpg',
			message:  'A DAY MAY COME WHEN THE COURAGE OF MEN FAILS...BUT NOT THIS DAY.'
		},
		{ 
			image: 	  'levelFour.jpg',
			message:  'THERE IS SOME GOOD IN THIS WORLD, MR. FRODO, AND ITS WORTH FIGTHING FOR.'
		},
		{
			image: 	  'levelFive.jpg',
			message:  'NOT ALL THOSE WHO WANDER ARE LOST.'
		},
		{
			image: 	  'levelSix.jpg',
			message:  'EVEN THE SMALLEST PERSON CAN CHANGE THE COURSE OF THE FUTURE.'
		},
		{
			image: 	  'levelSeven.jpg',
			message:  'BE A WARRIOR NOT A WORRIER.'
		},
		{
			image: 	  'levelEight.jpg',
			message:  'YOUR TIME WILL COME. YOU WILL FACE THE SAME EVIL, AND YOU WILL DEFEAT IT.'
		},
		{
			image: 	  'levelEight.jpg',
			message:  'THE RING HAS AWOKEN, IT’S HEARD ITS MASTERS CALL.'
		},
		{
			image: 	  'levelNine.jpg',
			message:  'THE BOARD IS SET, THE PIECES ARE MOVING. WE COME TO IT AT LAST, THE GREAT BATTLE OF OUR TIME.'
		},
		{
			image: 	  'levelTen.jpg',
			message:  'HOME IS NOW BEHIND YOU, THE WORLD IS AHEAD.'
		}
	];

	let getLevels = (levelValue) => {
		let myCurrentLevel = {};
		myCurrentLevel.levelCharacters = levels[levelValue];
		myCurrentLevel.backgroundImage = levelDetails[levelValue];
		return myCurrentLevel;
	};

	return {getLevels};

});
