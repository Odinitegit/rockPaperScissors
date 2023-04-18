//get random choice
function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// playRound function
function playRound(playerSelection,computerSelection){
    
    
    if(playerSelection === computerSelection){
        return "It's a tie! " + playerSelection + " is equal to " + computerSelection + "." 
    }else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        return  "You win! " + playerSelection + " beats " + computerSelection + "!"; 
      } else {
        return  "You lose! " + computerSelection + " beats " + playerSelection + "!"; 
      }
    }




// playgame
function playGame() {
        let playerSelection = prompt("Choose your weapon!(rock,paper,scissors)",""); // You can change this to update the player's choice.;
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        
        let playerScore =  0
        let computerScore = 0
       
        if (playerSelection === computerSelection){
            playerScore = 0;
            computerScore = 0;
        }else if(
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")){
                playerScore++
            }else if(playerSelection === !playerSelection 
                || playerSelection !== "rock"
                || playerSelection !== "paper"
                || playerSelection !== "scissors"){
                console.log("Invalid Entry")
                return null;
            }else{
                computerScore++
            }

            
        
        
        console.log("Round: 1");
        console.log("Computer Selection: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
    
        playerSelection = prompt("Choose your weapon!(rock,paper,scissors)","");
        computerSelection = getComputerChoice();
        console.log("Round: 2");
        console.log("Computer Selection: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
    
        playerSelection = prompt("Choose your weapon!(rock,paper,scissors)","");
        computerSelection = getComputerChoice();
        console.log("Round: 3");
        console.log("Computer Selection: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
    
        playerSelection = prompt("Choose your weapon!(rock,paper,scissors)","");
        computerSelection = getComputerChoice();
        console.log("Round: 4");
        console.log("Computer Selection: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
        
        playerSelection = prompt("Choose your weapon!(rock,paper,scissors)","");
        computerSelection = getComputerChoice();
        console.log("Round: 5");
        console.log("Computer Selection: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
    }
    
    playGame();

