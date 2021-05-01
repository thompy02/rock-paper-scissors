
//basic value constants and variables
const GameValues = ["rock", "paper", "scissors"];
let PlayerPoints = 0;
let ComputerPoints = 0;

 //Random selector for the computer to generate a choice from the GameValues constant   
function ComputerPlay(){
    return GameValues[Math.floor(Math.random() * GameValues.length)];
  }
  
  //these just prompt the user for a choice and then puts the computer play function in to a constant to be used elsewhere
  const PlayerSelection = prompt("enter your selection here");
  const ComputerSelection =  ComputerPlay();

//this function manages the logic between player and computer choices returning the winner
function PlayRound(PlayerSelection,ComputerSelection){
  if (ComputerSelection === PlayerSelection){
    return("players have tied");

  } else if ( ComputerSelection === "rock" && PlayerSelection === "scissors"){
    return("computer wins with "  +ComputerSelection);
  }

  else if (ComputerSelection === "paper" && PlayerSelection === "rock") {
   return ("computer wins with"  +ComputerSelection);
  }

  else if (ComputerSelection === "scissors" && PlayerSelection === "paper"){ 
    return("computer wins with" +ComputerSelection);
  }

  else if (ComputerSelection === "scissors" && PlayerSelection === "rock") {
    return("Player wins with"  +PlayerSelection);
  }

  else if (ComputerSelection === "rock" && PlayerSelection === "paper") {
    return("player wins with"  +PlayerSelection);
  }

  else ( ComputerSelection === "paper" && PlayerSelection === "scissors"); { 
    return("player wins with"  +PlayerSelection);
  }

}
//this shows the result of the round on screen with an alert
alert(PlayRound(PlayerSelection,ComputerSelection));

//will accept any input "used rock paper scissors": currently unresolved
//logic always results in player winning: this has been resolved computer play was in the logic instead of the computer selection 