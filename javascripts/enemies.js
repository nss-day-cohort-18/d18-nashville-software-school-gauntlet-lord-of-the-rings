"use strict";

/*

  ============ Need to set up Gauntlet.Combatants.Monster Obj ===============


  Base function for enemies, class (profession)

                                            --Initially you start with some base classes. All of these 
                                              will be our "players", and each player will take on these 
                                              classes

                                            You have:
                                                  -name               typeof string
                                                  -healthBonus        typeof integer
                                                  -strengthBonus      typeof integer
                                                  -intelligenceBonus  typeof integer
                                                  -magical            typeof boolean
*/





/*
    Orc CLASSES
      - Warrior
      - Berserker
      - Shaman

                                            --Now we are setting up some "Orc" classes. All fighter clases 
                                              take on the same properties as Monster, but they each have some 
                                              different advantages or disadvantages. Each "Fighter" starts with an 
                                              initial health and strength bonus.

                                                -healthBonus += 20
                                                -A class of either "Warrior", "Berserker", or "Shaman" at random
                                                -The random class takes on properties from Gauntley.GuildHall["randomClass"]
                                                -It will take properties from that specific class  

 */

Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  };
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();














