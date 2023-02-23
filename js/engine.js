const cells = document.querySelectorAll("td");
let turn = "X";
let wins = {
  X: 0,
  O: 0
};

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked() {
  if (this.textContent === "") {
    this.textContent = turn;
    checkWin(turn);
    turn = turn === "X" ? "O" : "X";
  }
}

function checkWin(player) {
  if (
    cells[0].textContent === player &&
    cells[1].textContent === player &&
    cells[2].textContent === player
  ) {
    declareWinner(player);
  } else if (
    cells[3].textContent === player &&
    cells[4].textContent === player &&
    cells[5].textContent === player
  ) {
    declareWinner(player);
  } else if (
    cells[6].textContent === player &&
    cells[7].textContent === player &&
    cells[8].textContent === player
  ) {
    declareWinner(player);
  } else if (
    cells[0].textContent === player &&
    cells[3].textContent === player &&
    cells[6].textContent === player
  ) {
    declareWinner(player);
  } else if (
    cells[1].textContent === player &&
    cells[4].textContent === player &&
    cells[7].textContent === player
  ) {
    declareWinner(player);
  } else if (
    cells[2].textContent === player &&
    cells[5].textContent === player &&
    cells[8].textContent === player
  ) {
    declareWinner(player);
  } else if (
    cells[0].textContent === player &&
    cells[4].textContent === player &&
    cells[8].textContent === player
  ) {
    declareWinner(player);
  } else if (
    cells[2].textContent === player &&
    cells[4].textContent === player &&
    cells[6].textContent === player
  ) {
    declareWinner(player);
  }
}

function declareWinner(player) {
  let winnerDisplay = document.createElement("h2");
  winnerDisplay.textContent = player + " wins!";
  document.body.appendChild(winnerDisplay);

  wins[player]++; // Increment the win counter for the winning player
  let winCountDisplay = document.createElement("p");
  winCountDisplay.textContent = "X wins: " + wins.X + "   O wins: " + wins.O;
  document.body.appendChild(winCountDisplay);

  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", cellClicked);
  }
}

let resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
document.body.appendChild(resetButton);

resetButton.addEventListener("click", resetGame);

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].addEventListener("click", cellClicked);
  }

  let winnerDisplay = document.querySelector("h2");
  if (winnerDisplay) {
    winnerDisplay.remove();
  }

  let winCountDisplay = document.querySelector("p");
  if (winCountDisplay) {
    winCountDisplay.remove();
  }
}
