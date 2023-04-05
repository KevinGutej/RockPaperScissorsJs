let userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();

// Computer's Choice
let computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

let compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return "The result is a tie!";
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "You win! Rock beats scissors.";
    } else {
      return "You lose! Paper beats rock.";
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "You win! Paper beats rock.";
    } else {
      return "You lose! Scissors beats paper.";
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "paper") {
      return "You win! Scissors beats paper.";
    } else {
      return "You lose! Rock beats scissors.";
    }
  }
};

// Display Result
alert(compare(userChoice, computerChoice));