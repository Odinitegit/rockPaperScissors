// get random computer choice

function getComputerChoice(){
    let choices = ["Rock","Paper","Scissors"]
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

//stupid ocd fluff function
/*function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
}

//prompt for player to select choice
 let playerSelection = prompt("Choose your weapon! (Rock,Paper,Scissors)","").toLowerCase();
 playerSelection = capitalizeFirstLetter(playerSelection) ; */

    //Tie condition
   
    function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection ){
    return  "It's a tie!";
    
    // Win conditions
   
    }else if ( playerSelection === "Rock" && computerSelection === "Scissors" ){
    return  "You Win! Rock beats Paper!" ;

    }else if (playerSelection === "Paper" && computerSelection === "Rock" ){
    return  "You Win! Paper beats Rock!";

    }else if (playerSelection === "Scissors" && computerSelection === "Paper"){
    return "You Win! Scissors beat Paper!";
    
    // Lose conditions

    }else if ( playerSelection === "Scissors" && computerSelection === "Rock" ){
    return "You Lose!Rock beats Paper!" ;

    }else if (playerSelection === "Rock" && computerSelection === "Paper" ){
     return "You Lose! Paper beats Rock!";
       
    }else if (playerSelection === "Paper" && computerSelection === "Scissors"){
     return "You Lose!Scissors beat Paper!";
    }
}





    
const playerSelection = "Rock"   
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection,playRound(playerSelection,computerSelection));

