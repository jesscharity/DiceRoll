
  function dicee(dice, dice2) {

  var dice = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
  var randomDice = dice.length;
  var dices = Math.floor(Math.random() * randomDice);
  var diceRoll = dice[dices];

  var p1 = document.querySelector(".img1").srcset = diceRoll;

  var dice2 = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
  var randomDice2 = dice2.length;
  var dices2 = Math.floor(Math.random() * randomDice2);
  var diceRoll2 = dice2[dices2];

  var p2 = document.querySelector(".img2").srcset = diceRoll2;

  if (diceRoll > diceRoll2) {
    output = document.querySelector(".container h1").textContent = "Player 1 Wins!";
  }
  else if (diceRoll < diceRoll2) {
    output = document.querySelector(".container h1").textContent = "Player 2 Wins!";
  }
  else {
    output = document.querySelector(".container h1").textContent = "Draw!";
  }
}
dicee();




//var img = document.createElement("img");
//
//img.src = "images\dice2.png";
//var src = document.querySelector(".img1");
//
//src.appendChild("img");


//document.querySelector(".container h1").textContent = "Player 1 Wins!";
//document.querySelector(".container h1").textContent = "Player 2 Wins!";
//document.querySelector(".container h1").textContent.toggle;



//document.querySelector("img.img1").
//<img class="img1" src="images\dice1.png", "images\dice2.png", "images\dice3.png", "images\dice4.png", "images\dice5.png", "images\dice6.png">


//function dicee(dice) {
//
//  var img1 = document.querySelector(".img1");
//  var img2 = document.querySelector(".img2");
//
//  var dice = ["images\dice1.png", "images\dice2.png", "images\dice3.png", "images\dice4.png", "images\dice5.png", "images\dice6.png"];
//  var randomDice = dice.length;
//  var dices = Math.floor(Math.random() * randomDice);
//  var diceRoll = dice[dices];
//
//}
//
//dicee();

//function dicee(dice) {


//  var dice = ["images\dice1.png", "images\dice2.png", "images\dice3.png", "images\dice4.png", "images\dice5.png", "images\dice6.png"];
//  var randomDice = dice.length;
//  var dices = Math.floor(Math.random() * randomDice);
//  var diceRoll = dice[dices];
//
//  return document.querySelector(".img1").srcset = diceRoll;
//
//}
//
//dicee();


//function dicee(dice) {
//
//  var dice1.srcset = images\dice1.png;
//  var dice2.srcset = images\dice2.png;
//  var dice3.srcset = images\dice3.png;
//  var dice4.srcset = images\dice4.png;
//  var dice5.srcset = images\dice5.png;
//  var dice6.srcset = images\dice6.png;
//
//  var dice = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];
//  var randomDice = dice.length;
//  var dices = Math.floor(Math.random() * randomDice);
//  var diceRoll = dice[dices];
//
//  return document.querySelector(".img1").srcset = diceRoll;
//
//}
//
//dicee();


//function dicee(dice) {
//
//  var dice = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
//  var randomDice = dice.length;
//  var dices = Math.floor(Math.random() * randomDice);
//  var diceRoll = dice[dices];
//
//  return document.querySelector(".img1").srcset = diceRoll;
//
//}
//
//dicee();


//function dicee(dice) {
//
//  var dice = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
//  var randomDice = dice.length;
//  var dices = Math.floor(Math.random() * randomDice);
//  var diceRoll = dice[dices];
//
//  var p1 = document.querySelector(".img1").srcset = diceRoll;
//  var p2 = document.querySelector(".img2").srcset = diceRoll;
//
//}
//
//dicee();


//GETTING CLOSER


//function dicee(dice) {
//
//  var dice = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
//  var randomDice = dice.length;
//  var dices = Math.floor(Math.random() * randomDice);
//  var diceRoll = dice[dices];
//
//  var p1 = document.querySelector(".img1").srcset = diceRoll;
//}
//
//dicee();
//
//function dicee2(dice2) {
//
//  var dice2 = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
//  var randomDice2 = dice2.length;
//  var dices2 = Math.floor(Math.random() * randomDice2);
//  var diceRoll2 = dice2[dices2];
//
//  var p2 = document.querySelector(".img2").srcset = diceRoll2;
//}
//
//dicee2();



//function dicee(dice, dice2) {
//
//  var dice = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
//  var randomDice = dice.length;
//  var dices = Math.floor(Math.random() * randomDice);
//  var diceRoll = dice[dices];
//
//  var p1 = document.querySelector(".img1").srcset = diceRoll;
//
//  var dice2 = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
//  var randomDice2 = dice2.length;
//  var dices2 = Math.floor(Math.random() * randomDice2);
//  var diceRoll2 = dice2[dices2];
//
//  var p2 = document.querySelector(".img2").srcset = diceRoll2;
//
//}
//
//dicee();


//FINAL SOLUTION

//function dicee(dice, dice2) {
//
//  var dice = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
//  var randomDice = dice.length;
//  var dices = Math.floor(Math.random() * randomDice);
//  var diceRoll = dice[dices];
//
//  var p1 = document.querySelector(".img1").srcset = diceRoll;
//
//  var dice2 = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
//  var randomDice2 = dice2.length;
//  var dices2 = Math.floor(Math.random() * randomDice2);
//  var diceRoll2 = dice2[dices2];
//
//  var p2 = document.querySelector(".img2").srcset = diceRoll2;
//
//  if (diceRoll > diceRoll2) {
//    output = document.querySelector(".container h1").textContent = "Player 1 Wins!";
//  }
//  else if (diceRoll < diceRoll2) {
//    output = document.querySelector(".container h1").textContent = "Player 2 Wins!";
//  }
//  else if (diceRoll = diceRoll2) {
//    output = document.querySelector(".container h1").textContent = "Draw!";
//  }
//
//}
//
//dicee();
