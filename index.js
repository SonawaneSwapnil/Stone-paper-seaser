let userScore = 0;

let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");

const machineScorePara = document.querySelector("#machine-code");

const message = document.querySelector("#msg");
const genrateComputerChoice = () => {
  let option = ["rock", "paper", "seaser"];
  const randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};

const drawGame = () => {
  message.innerText = "Draw";
  message.style.backgroundColor = "yellow";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    message.innerText = "You Win";
    message.style.backgroundColor = "green";
  } else {
    compScore++;
    machineScorePara.innerText = compScore;
    message.innerText = "you lose";

    message.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genrateComputerChoice();

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scerirs,paper

      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //sceries,rock
      userWin = compChoice === "scerirs" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
