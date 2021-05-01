

const GameValues = ["rock", "paper", "scissors"];
let PlayerPoints = 0;
let ComputerPoints = 0;

    
function ComputerPlay(){
    return GameValues[Math.floor(Math.random() * GameValues.length)];
  }
  
  
  const PlayerSelection = prompt("enter your selection here");
  const ComputerSelection =  ComputerPlay();

function PlayRound(PlayerSelection,ComputerSelection){
  if (ComputerPlay === PlayerSelection){
    return("players have tied");

  } else if ( ComputerPlay === "rock" && PlayerSelection === "scissors"){
    return("computer wins with "  +ComputerSelection);
  }

  else if (ComputerPlay === "paper" && PlayerSelection === "rock") {
   return ("computer wins with"  +ComputerSelection);
  }

  else if (ComputerPlay === "scissors" && PlayerSelection === "paper"){ 
    return("computer wins with" +ComputerSelection);
  }

  else if (ComputerPlay === "scissors" && PlayerSelection === "rock") {
    return("Player wins with"  +PlayerSelection);
  }

  else if (ComputerPlay === "rock" && PlayerSelection === "paper") {
    return("player wins with"  +PlayerSelection);
  }

  else ( ComputerPlay === "paper" && PlayerSelection === "scissors"); { 
    return("player wins with"  +PlayerSelection);
  }

}
alert(ComputerPlay);
alert(PlayRound(PlayerSelection,ComputerSelection));

