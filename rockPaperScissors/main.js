// get random computer choice
function getComputerChoice(){
    let choices = ["rock","paper","scissors"]
    let randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
}
  // play the round simple tie,  win or lose
function playRound(playerSelection,computerSelection){

    //return tie if playerselection and computer selection are === 
    if(playerSelection === computerSelection){
    return "tie";
  
    // if player beats computer return win, else lose
    }else if(playerSelection === "rock" && computerSelection === "scissors"
             || playerSelection === "paper" && computerSelection === "rock"
             || playerSelection === "scissors" && computerSelection === "paper"){
                return "win";
             }else{
                return "lose";
             }
        }
   
  // declare valid  inputes
  function validInputs(input){
    return input === "rock" || input === "paper" || input === "scissors";
  }
 
  // keep score 
  function keepScore(result,playerScore,computerScore){
    if(result === "win"){
        playerScore++  ;
    }else if(result === "lose"){
        computerScore++ ;
  }
  
  }

  // play the game 
  function game(round = 1, playerSelection,computerSelection){
    
  
  
    // prompt player
    let playerSelection = prompt("Choose your weapon!(rock,paper,scissors)", "");
  
    // if player chooses nothing or cancels, cancel the game
    if(playerSelection === null){
        console.log ("Cancelled game")
        return ;
    }
   
  // set player choice to lowercase
    playerSelection = playerSelection.toLowerCase ;
  

    // if validinput function is not true,  display text "invalid entry", and start the round over 
   if(!validInputs(playerSelection)){
    console.log("Invalid Entry, please enter rock,paper, or scissors")
    game(round = 1, playerSelection,computerSelection);
    return;
   }
    
  
    //declare computerSelection and result
    let result = playRound(playRound(playerSelection,computerSelection));
    const computerSelection = getComputerChoice();

    
    
    // store scores as an array and update them by calling on updateScores() function
   [playerScore,computerScore] = keepScore(result,playerScore,computerScore)
  
    //log the rounds using backticks and log computer choice
  console.log("Round: ",`${round}`)
  console.log(computerSelection)
  
    // log messages for player win, lose, or tie
if(result === "tie"){
   console.log("It's a tie! ", playerSelection, " is equal to ",computerSelection,".")
}else if(result === "win") {
    console.log("You win ",playerSelection, "beats ", computerSelection,"!")
}else{
   console.log( "You lose! ", computerSelection, " beats ",playerSelection, "!") 
}
    
    
  
    // log the scores
   

//update the round number

}