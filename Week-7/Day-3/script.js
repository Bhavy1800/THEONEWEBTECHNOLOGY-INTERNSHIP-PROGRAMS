// Game logic for Tic Tac Toe
let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      if (checkWinner(currentPlayer)) {
        alert(`${currentPlayer} wins!`);
        resetGame();
      } else if (isBoardFull()) {
        alert("It's a draw!");
        resetGame();
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

function checkWinner(player) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  return winPatterns.some((pattern) => {
    return pattern.every((index) => cells[index].textContent === player);
  });
}

function isBoardFull() {
  return [...cells].every((cell) => cell.textContent);
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "X";
}
