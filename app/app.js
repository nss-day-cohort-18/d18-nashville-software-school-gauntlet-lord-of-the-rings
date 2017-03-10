"use strict";
console.log("App.js is connected!");

var app = angular.module("Gauntlet", ["ngRoute"])
.service("LOTR", function(){
	this.Weapons = {};
	this.Combatants = {
		Monsters: {},
		Fellowship: {}
	};
	
});


app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/Welcome', {
			templateUrl: '/partials/welcome.html',
			controller: 'WelcomeCtrl',
		})
		.when('/ChoosePlayer', {
			templateUrl: '/partials/ChoosePlayer.html',
			controller: 'ChoosePlayerCtrl',
		})
		.when('/BattleView', {
			templateUrl: '/partials/BattleView.html',
			controller: 'BattleViewCtrl',
		})
		.when('/Replacement', {
			templateUrl: '/partials/ReplacementPlayer.html',
			controller: 'ReplacementPlayerCtrl'
		})
		.when('/Summary', {
			templateUrl: '/partials/Summary.html',
			controller: 'SummaryCtrl',
		})
		.otherwise('/Welcome');
});

app.run(($location, $http, LOTR, MonsterFactory, FellowshipFactory, WeaponFactory) => {

	let mySheeeeyit = [

		$http.get("../appComponents/Weapons.json")
	            .then(//what is happening here? Is this getting each json and making a weapon and then.....?
	            	(WeaponData) => Promise.all(WeaponData.data.map((Weapons) => WeaponFactory.createWeapons(Weapons)))
	            	),
	
		$http.get("../appComponents/Fellowship.json")
	            .then(
	            	(HeroData) => Promise.all(HeroData.data.map((Hero) => FellowshipFactory.createFellowship(Hero)))
	            	),

		$http.get("../appComponents/Monsters.json")
	            .then(
	            	(MonsterData) => Promise.all(MonsterData.data.map((Monster) => MonsterFactory.createMonsters(Monster)))
	            		),

	];

	Promise.all(mySheeeeyit).then((theShit) => console.log("Done: ", theShit));


});









