const overlay = document.getElementById('overlay');
const phraseUl = document.querySelector('ul');
const liElements = phraseUl.children;
const lives = document.querySelectorAll('li img');
const gameOverMessage = document.getElementById('game-over-message');
const keyboard = document.querySelectorAll('.key');


const game = new Game();
 const startButton = document.getElementById('btn__reset');
    startButton.addEventListener('click', (e) => {
      game.startGame();
});

for (let j = 0; j < keyboard.length; j ++) {
  keyboard[j].addEventListener('click', (event) => {
    game.handleInteraction(event.target.innerText);
  });
}
