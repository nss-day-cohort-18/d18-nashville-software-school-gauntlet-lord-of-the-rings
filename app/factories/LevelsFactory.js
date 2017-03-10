"use strict";

console.log("LevelsFactory.js is connected");

app.factory("LevelsFactory", function() {

	let levels = [
		{																												//Level 1 Characters
			Fellowship: 	['Frodo', 'Sam'],																	
			Monsters: 		['Orc', 'Orc', 'Orc', 'Ringraith']
		},
		{																												//Level 2 Characters

			Fellowship: 	['Gimli', 'Legolas', 'Aragorn', 'Gandalf'],
			Monsters: 		['Orc', 'Orc', 'CaveTroll', 'Urukhai', 'Fellbeast']
		},
		{																												//Level 3 Characters
			Fellowship: 	[],																								
			Monsters: 		['Smeagol']
		}
	];

	let levelDetails = [
		{ 
			image: 	  '../images/backgrounds/levelOne.jpg',
			message:  'ONE DOES NOT SIMPLY WALK INTO MORDOR.'
		},
		{ 
			image: 	  '../images/backgrounds/levelTwo.jpg',
			message:  'THERES SOME GOOD IN THIS WORLD, MR. FRODO...AND THATS WORTH FIGHTING FOR.'
		},
		{ 
			image: 	  '../images/backgrounds/levelThree.jpg',
			message:  'A DAY MAY COME WHEN THE COURAGE OF MEN FAILS...BUT NOT THIS DAY.'
		},
		{ 
			image: 	  '../images/backgrounds/levelFour.jpg',
			message:  'THERE IS SOME GOOD IN THIS WORLD, MR. FRODO, AND ITS WORTH FIGTHING FOR.'
		},
		{
			image: 	  '../images/backgrounds/levelFive.jpg',
			message:  'NOT ALL THOSE WHO WANDER ARE LOST.'
		},
		{
			image: 	  '../images/backgrounds/levelSix.jpg',
			message:  'EVEN THE SMALLEST PERSON CAN CHANGE THE COURSE OF THE FUTURE.'
		},
		{
			image: 	  '../images/backgrounds/levelSeven.jpg',
			message:  'BE A WARRIOR NOT A WORRIER.'
		},
		{
			image: 	  '../images/backgrounds/levelEight.jpg',
			message:  'YOUR TIME WILL COME. YOU WILL FACE THE SAME EVIL, AND YOU WILL DEFEAT IT.'
		},
		{
			image: 	  '../images/backgrounds/levelEight.jpg',
			message:  'THE RING HAS AWOKEN, IT’S HEARD ITS MASTERS CALL.'
		},
		{
			image: 	  '../images/backgrounds/levelNine.jpg',
			message:  'THE BOARD IS SET, THE PIECES ARE MOVING. WE COME TO IT AT LAST, THE GREAT BATTLE OF OUR TIME.'
		},
		{
			image: 	  '../images/backgrounds/levelTen.jpg',
			message:  'HOME IS NOW BEHIND YOU, THE WORLD IS AHEAD.'
		}
	];

	let getLevels = (levelValue) => {
		let myCurrentLevel = {};
		myCurrentLevel.levelCharacters = levels[levelValue];
		myCurrentLevel.levelDetails = levelDetails[levelValue];
		return myCurrentLevel;
	};

	return {getLevels};

});
