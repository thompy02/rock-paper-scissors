
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
  

  let PlayerScoreReporter = ("player points are " +PlayerPoints);
  let ComputerScoreReporter = ("computer points are " +ComputerPoints);
 


//this function manages the logic between player and computer choices returning the winner
function PlayRound(){

  let ComputerSelection =  ComputerPlay();
  let PlayerInput = prompt("enter your selection here");
  

  if (ComputerSelection === PlayerInput){
    console.log("players have tied");
    

  } 
  
  if ( ComputerSelection === "rock" && PlayerInput === "scissors" || 
        ComputerSelection === "paper" && PlayerInput === "rock" || 
          ComputerSelection === "scissors" && PlayerInput === "paper"){
    ComputerPoints++;
    console.log("computer wins with " +ComputerSelection);
   
  }
  
   else if (ComputerSelection === "scissors" && PlayerInput === "rock" ||
              ComputerSelection === "rock" && PlayerInput === "paper" || 
                ComputerSelection === "paper" && PlayerInput === "scissors" ) {
    PlayerPoints++;
    console.log("Player wins with " +PlayerInput);
  }

  console.log(ComputerSelection)
  console.log(PlayerInput)
}


// runs 5 rounds of the game

function game(){
 PlayRound();
 PlayRound();
 PlayRound();
 PlayRound();
 PlayRound();
 
 //reports the final points for view of the player
 console.log("these are the computer points " +ComputerPoints);
 console.log("these are the player points " +PlayerPoints);
 
 //logic to report who has won overall
 if (ComputerPoints > PlayerPoints){
   console.log("the computer has won!")
 }

 else if (ComputerPoints < PlayerPoints){
  console.log("the player has won!")
}

 else if (ComputerPoints = PlayerPoints){
   console.log("the score is tied")
 }
}

game();



//will accept any input "used rock paper scissors": (incomplete)
//need to make it case insensitive too (Incomplete)
//logic always results in player winning: this has been resolved computer play was in the logic instead of the computer selection (COMPLETE)
//the gmae function isn't working it should probably be a button that can initiate a new instance (resolved)
//SCOREKEEPING (COMPLETE)




