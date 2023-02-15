const cells = document.querySelectorAll('.cell');
let currentPlayer = 'azul';

cells.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  cell.classList.add(currentPlayer);

  if (checkWin()) {
    alert(`O jogador ${currentPlayer} ganhou!`);
    resetGame();
  } else if (checkDraw()) {
    alert('Empate!');
    resetGame();
  } else {
    currentPlayer = currentPlayer === 'azul' ? 'vermelho' : 'azul';
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombos.some(combo => {
    return combo.every(index => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}

function checkDraw() {
  return [...cells].every(cell => {
    return cell.classList.contains('azul') || cell.classList.contains('vermelho');
  });
}

function resetGame() {
  cells.forEach(cell => {
    cell.classList.remove('azul', 'vermelho');
  });

  currentPlayer = 'azul';
}
