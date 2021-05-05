
//basic value constants and variables
const GameValues = ["rock", "paper", "scissors"];
let PlayerPoints = 0;
let ComputerPoints = 0;
let RoundsPlayed = 0;

 //Random selector for the computer to generate a choice from the GameValues constant   
function ComputerPlay(){
    return GameValues[Math.floor(Math.random() * GameValues.length)];
  }
  
  //these just prompt the user for a choice and then puts the computer play function in to a constant to be used elsewhere
  const PlayerSelection = prompt("enter your selection here");
  const PlayerInput = PlayerSelection.toLowerCase();
  const ComputerSelection =  ComputerPlay();

//this function manages the logic between player and computer choices returning the winner
function PlayRound(PlayerSelection,ComputerSelection){
  if (ComputerSelection === PlayerInput){
    ComputerPoints++;
    return("players have tied");
    

  } else if ( ComputerSelection === "rock" && PlayerInput === "scissors"){
    ComputerPoints++;
    return("computer wins with "  +ComputerSelection);
   
  }

  else if (ComputerSelection === "paper" && PlayerInput === "rock") {
    ComputerPoints++;
   return ("computer wins with "  +ComputerSelection);
   
  }

  else if (ComputerSelection === "scissors" && PlayerInput === "paper"){ 
    PlayerPoints++;
    return("computer wins with " +ComputerSelection);
  }

  else if (ComputerSelection === "scissors" && PlayerInput === "rock") {
    PlayerPoints++;
    return("Player wins with "  +PlayerInput);
  }

  else if (ComputerSelection === "rock" && PlayerInput === "paper") {
    PlayerPoints++;
    return("player wins with "  +PlayerInput);
  }

  else ( ComputerSelection === "paper" && PlayerInput === "scissors"); { 
    PlayerPoints++;
    return("player wins with "  +PlayerInput);
  }

}

let RoundResult = PlayRound(PlayerSelection,ComputerSelection);

//supposed to run 5 rounds of the game, doesn't yet. think it has to do with the syntax, read this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement

function RepetitionLogic(){
  for(let i=0; i<5; i++);
}
//didn't work

function GameAutomator(RepetitionLogic){
return(PlayRound(PlayerSelection,ComputerSelection));
}
console.log(GameAutomator(),PlayerPoints,ComputerPoints);


//will accept any input "used rock paper scissors": currently unresolved
//need to make it case insensitive too (COMPLETE)
//logic always results in player winning: this has been resolved computer play was in the logic instead of the computer selection (COMPLETE)

//can I just input a fucking array of choices?
//SCOREKEEPING