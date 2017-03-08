"use strict";
console.log("App.js is connected!");

var app = angular.module("Gauntlet", ["ngRoute"]);

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
		.when('/Summary', {
			templateUrl: '/partials/Summary.html',
			controller: 'SummaryCtrl',
		})
		.otherwise('/Welcome');
});

app.run(($location) => {
	console.log("Here is Gauntlet app");
});













