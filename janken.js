
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
  //let PlayerInput = prompt("enter your selection here");
  let ComputerSelection =  ComputerPlay();

  let ScoreReporter = ("computer points are " +ComputerPoints) && ("player points are " +PlayerPoints);
 


//this function manages the logic between player and computer choices returning the winner
function PlayRound(ComputerSelection){

  let PlayerInput = prompt("enter your selection here");

  if (ComputerSelection === PlayerInput){
    return("players have tied");
    

  } else if ( ComputerSelection === "rock" && PlayerInput === "scissors"){
    ComputerPoints++;
    RoundsPlayed++;
    return("computer wins with " +ComputerSelection);
   
  }

  else if (ComputerSelection === "paper" && PlayerInput === "rock") {
   ComputerPoints++;
   RoundsPlayed++;
   return ("computer wins with " +ComputerSelection);
  
  }

  else if (ComputerSelection === "scissors" && PlayerInput === "paper"){ 
    ComputerPoints++;
    RoundsPlayed++;
    return("computer wins with "+ComputerSelection);
  }

  else if (ComputerSelection === "scissors" && PlayerInput === "rock") {
    PlayerPoints++;
    RoundsPlayed++;
    return("Player wins with " +PlayerInput);
  }

  else if (ComputerSelection === "rock" && PlayerInput === "paper") {
    PlayerPoints++;
    RoundsPlayed++;
    return("player wins with " +PlayerInput);
  }

  else ( ComputerSelection === "paper" && PlayerInput === "scissors"); { 
    PlayerPoints++;
    RoundsPlayed++;
    return("player wins with " +PlayerInput);
  }

  
}


//supposed to run 5 rounds of the game, doesn't yet. think it has to do with the syntax, read this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement

function game(){
 PlayRound(ComputerSelection);
 PlayRound(ComputerSelection);
 PlayRound(ComputerSelection);
 PlayRound(ComputerSelection);
 PlayRound(ComputerSelection);
}


console.log(game());
//will accept any input "used rock paper scissors": currently unresolved
//need to make it case insensitive too (Incomplete)
//logic always results in player winning: this has been resolved computer play was in the logic instead of the computer selection (COMPLETE)
//the gmae function isn't working it should probably be a button that can initiate a new instance

//can I just input a fucking array of choices?
//SCOREKEEPING