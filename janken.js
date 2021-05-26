
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

  let PlayerScoreReporter = ("player points are " +PlayerPoints);
  let ComputerScoreReporter = ("computer points are " +ComputerPoints);
 


//this function manages the logic between player and computer choices returning the winner
function PlayRound(ComputerSelection){

  let PlayerInput = prompt("enter your selection here");

  if (ComputerSelection === PlayerInput){
    console.log("players have tied");
    

  } 
  
  if ( ComputerSelection === "rock" && PlayerInput === "scissors"){
    ComputerPoints++;
    console.log("computer wins with " +ComputerSelection);
   
  }
  
   if (ComputerSelection === "paper" && PlayerInput === "rock") {
   ComputerPoints++;
   console.log ("computer wins with " +ComputerSelection);
  
  }
  
   if (ComputerSelection === "scissors" && PlayerInput === "paper"){ 
    ComputerPoints++;
    console.log("computer wins with "+ComputerSelection);
  }
  
   if (PlayerInput === "rock" && ComputerSelection === "scissors") {
    PlayerPoints++;
    console.log("Player wins with " +PlayerInput);
  }
  
   if (PlayerInput === "paper" && ComputerSelection === "rock") {
    PlayerPoints++;
    console.log("player wins with " +PlayerInput);
  }
  
  if (PlayerInput === "scissors" && ComputerSelection === "paper"); { 
    PlayerPoints++;
    console.log("player wins with " +PlayerInput);
  }
  
}


// runs 5 rounds of the game

function game(){
 PlayRound(ComputerSelection);
 PlayRound(ComputerSelection);
 PlayRound(ComputerSelection);
 PlayRound(ComputerSelection);
 PlayRound(ComputerSelection);
 
 console.log(PlayerPoints);
 console.log(ComputerPoints);
 
 if (ComputerPoints > PlayerPoints){
   console.log("the computer has won!")
 }

 else (ComputerPoints < PlayerPoints);{
  console.log("the player has won!")
}

}


 game();



//will accept any input "used rock paper scissors": (incomplete)
//need to make it case insensitive too (Incomplete)
//logic always results in player winning: this has been resolved computer play was in the logic instead of the computer selection (COMPLETE)
//the gmae function isn't working it should probably be a button that can initiate a new instance (resolved)
//SCOREKEEPING (COMPLETE)




