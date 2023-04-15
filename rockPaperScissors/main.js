// get the computer choice
function getComputerChoice(){
    let choice = ["rock","paper","scissors"]
    const randomIndex = (Math.floor(Math.random() * 3))
    return choice[randomIndex];
}
console.log(getComputerChoice())

//prompt for playerselection

let playerSelection = prompt("Choose your weapon!(Rock,Paper,Scissors)","").toLowerCase();


function playRound(playerSelection,computerSelection){
    
    if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You win!" + playerSelection + "beats" + computerSelection;
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win!" + playerSelection + "beats" + computerSelection;
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        return  "You win!" + playerSelection + "beats" + computerSelection;
    }else{
        return "you lose"
    }
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));