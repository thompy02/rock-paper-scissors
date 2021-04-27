const GameValues = ["Rock", "Paper", "Scissors"];

    
function ComputerPlay(){
    return GameValues[Math.floor(math.random() * GameValues.length)];
}

const PlayerSelection = prompt();
const ComputerSelection =  ComputerPlay();

function PlayRound(PlayerSelection, ComputerSelection){
    if (ComputerSelection > PlayerSelection)
        alert ("The computer wins with" +ComputerSelection);
    else{
        alert ("Player wins with" +PlayerSelection);
}
}

PlayRound()



 