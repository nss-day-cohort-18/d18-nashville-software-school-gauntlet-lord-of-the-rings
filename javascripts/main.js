"use strict";
/*
  Test code to generate a human player and an orc player
 */
var BroadSword;
var WarAxe;

/*
                                    Currently set up on the webpage you have the ability to change
                                    your name, and then select a class. 
                                    However, within the  console, you already have some pre-sets 
                                    set up for you for testing purposes. 
                                    You have different properties being called for each player.

                                    playerName,
                                    skinColor,
                                    species,
                                    class,
                                    health,
                                    class.magical (true or false),
                                    weapon

                                    There are some classes being called at random, including health presets
*/                                            


/*
                                    Here we are setting up our components. To the left is a warrior, 
                                    who is a Human Combatant. To the right is a computer-based enemy (Orc)
*/                                    

var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());
console.log(orc.toString());

/*
  Test code to generate a spell
  This is a sphere of something for a random damage
*/
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});