let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let choices = ["rock","paper","scissors"]
  let randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex];
}

function playRound(playerSelection,computerSelection){
  if(playerSelection === computerSelection){
  return "tie";
  }else if(playerSelection === "rock" && computerSelection === "scissors"
           || playerSelection === "paper" && computerSelection === "rock"
           || playerSelection === "scissors" && computerSelection === "paper"){
              return "win";
           }else{
              return "lose";
           }
}

function keepScore(result,playerScore,computerScore){
  if(result === "win"){
      playerScore++  ;
  }else if(result === "lose"){
      computerScore++ ;
  }
  return [playerScore, computerScore];
}

function game(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection,computerSelection);
  [playerScore,computerScore] = keepScore(result,playerScore,computerScore);
  
document.getElementById('playerChoice').textContent = "Player Choice: " + playerSelection
document.getElementById('computerChoice').textContent = "Computer Choice: " + computerSelection
document.getElementById('result').textContent = "Result: " + result
document.getElementById('playerScore').textContent = "Player Score: " + playerScore
document.getElementById('computerScore').textContent = "Computer Score: " + computerScore
}


document.getElementById('rock').addEventListener('click', function() {
  game('rock');
});
document.getElementById('paper').addEventListener('click', function() {
  game('paper');
});
document.getElementById('scissors').addEventListener('click', function() {
  game('scissors');
});

