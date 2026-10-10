function getComputerChoice() {

    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) return "rock";
    if (computerChoice === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {

    const humanChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    return humanChoice;
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanSelection, computerSelection) {

    humanSelection = humanSelection.toLowerCase();

    if (humanSelection === "rock" && computerSelection === "rock") {
        humanScore += 0;
        computerScore += 0;
        return "Tie!";
    }

    if (humanSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return "Paper Beats Rock";
    }

    if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore += 1;
        return "Rock Beats Scissors";
    }

    if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore += 1;
        return "Paper Beats Rock";
    }

    if (humanSelection === "paper" && computerSelection === "paper") {
        humanScore += 0;
        computerScore += 0;
        return "Tie!";
    }

    if (humanSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return "Scissors Beats Paper";
    }
    
    if (humanSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return "Rock Beats Scissors";
    }

    if (humanSelection === "scissors" && computerSelection === "paper") {
        humanScore += 1;
        return "Scissors Beats Rocks";
    }

    if (humanSelection === "scissors" && computerSelection === "scissors") {
        humanScore += 0;
        computerScore += 0;
        return "tie!";
    }

}

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i + 1}:`);
        console.log(`Human: ${humanSelection}`);
        console.log(`Computer: ${computerSelection}`);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Human Score: ${humanScore} || Computer Score: ${computerScore}`);
        console.log(`__________________________`);
    }

    console.log("=== FINAL SCORES ===");
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Game over! The computer won the game.");
    } else {
        console.log("It's an overall tie game!");
    }

}

playGame();