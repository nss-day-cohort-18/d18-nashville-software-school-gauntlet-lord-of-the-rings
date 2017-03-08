"use strict";
/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)

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

Gauntlet.GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  };
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk

                                            --Now we are setting up some "fighter" classes. All fighter clases 
                                              take on the same properties as PlayerClass, but they each have some 
                                              different advantages or disadvantages. Each "Fighter" starts with an 
                                              initial health and strength bonus.

                                                -healthBonus += 20
                                                -strengthBonus =+ 10

 */
Gauntlet.GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();

/*
                                            -- "Warrior" Takes attributes from "Fighter"
                                                -healthBonus += 25
                                                -strengthBonus += 30
*/                                                

Gauntlet.GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Gauntlet.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();

/*
                                            -- "Valkyrie" Takes attributes from "Fighter"
                                                -healthBonus += 20
                                                -strengthBonus += 10
*/ 

Gauntlet.GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Gauntlet.GuildHall.Valkyrie.prototype = new Gauntlet.GuildHall.Fighter();

/*
                                            -- "Berserker" Takes attributes from "Fighter"
                                                -healthBonus += 35
                                                -strengthBonus += 20
*/ 

Gauntlet.GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
Gauntlet.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();

/*
                                            -- "Monk" Takes attributes from "Fighter"
                                                -healthBonus += 10
                                                -strengthBonus += 40
*/ 

Gauntlet.GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
Gauntlet.GuildHall.Monk.prototype = new Gauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer

                                            --Now we are setting up some "Mage" ("Magical") classes. All Mage clases 
                                              take on the same properties as PlayerClass, but they each have some 
                                              different advantages or disadvantages. Each "Mage" starts with an 
                                              subtracted health and strength, but they also have magical and intelligence 
                                              skill.  

                                                -healthBonus -= 10
                                                -strengthBonus -+ 20
                                                -magical = true
                                                -intelligenceBonus += 20
 */
Gauntlet.GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Gauntlet.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();

/*
                                            -- "Shaman" Takes attributes from "Mage"
                                                -healthBonus += 5
                                                -strengthBonus -= 10
                                                -intelligenceBonus += 20
*/ 


Gauntlet.GuildHall.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Gauntlet.GuildHall.Shaman.prototype = new Gauntlet.GuildHall.Mage();

/*
                                            -- "Wizard" Takes attributes from "Mage"
                                                -healthBonus -= 15
                                                -strengthBonus -= 25
                                                -intelligenceBonus += 40
*/ 

Gauntlet.GuildHall.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
Gauntlet.GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();

/*
                                            -- "Conjurer" Takes attributes from "Mage"                                                
                                                -strengthBonus -= 10
                                                -intelligenceBonus += 10
*/ 

Gauntlet.GuildHall.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Gauntlet.GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();

/*
                                            -- "Sorcerer" Takes attributes from "Mage"
                                                -healthBonus -= 5
                                                -strengthBonus -= 20
                                                -intelligenceBonus += 30
*/ 


Gauntlet.GuildHall.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin


                                            --Now we are setting up some "Steath" classes. All Mage clases 
                                              take on the same properties as PlayerClass, but they each have some 
                                              different advantages or disadvantages. The Stealth classes have been left for
                                              us to set up on our own.

                                                -healthBonu
                                                -strengthBonus
                                                - "some stealth bonus"
 */

