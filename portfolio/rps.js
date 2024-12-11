function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Function to play the game
function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  
  document.getElementById('userChoice').textContent = userChoice;
  document.getElementById('computerChoice').textContent = computerChoice;
  document.getElementById('result').textContent = result;

  console.log(`You chose ${userChoice}, computer chose ${computerChoice}.`);
  console.log(result);
}
