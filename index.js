
  function dicee(dice, dice2) {

  var dice = ["dice1.png", "dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
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
