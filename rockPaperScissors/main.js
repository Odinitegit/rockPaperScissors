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
  function keepScore(playerScore,computerScore){
   
    if(playRound(playerSelection,computerSelection) === "win"){
        playerScore++  ;
    }else{
        computerScore++ ;
  }
  
  }

  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log (keepScore(playerScore = 0,computerScore = 0));
  console.log (playRound(playerSelection,computerSelection));
  // play the game 
 
  
    // prompt player
    
  
    // if player chooses nothing or cancels, cancel the game
   
  // set player choice to lowercase
    
  

    // if validinput function is not true,  display text "invalid entry", and start the round over 
   
    
  
    //declare computerSelection and result
    
    
    // store scores as an array and update them by calling on updateScores() function
   
  
    //log the rounds using backticks and log computer choice
  
  
    // log messages for player win, lose, or tie

    
    
  
    // log the scores
   

//update the round number
  