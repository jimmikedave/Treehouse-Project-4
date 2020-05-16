/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const btnReset = document.getElementById('btn__reset');
const keyboard = document.getElementsByClassName('key');

//begins the game
btnReset.addEventListener('click', e => game.startGame());

//registers keyboard button click
for(i = 0; i < keyboard.length; i += 1) {
  keyboard[i].addEventListener('click', e => {
    game.handleInteraction(e.target);
  });
};


//registers keyboard press down
document.addEventListener('keydown', (e) => {
  for(i = 0; i < keyboard.length; i += 1){
    if (e.key === keyboard[i].textContent){
      game.handleInteraction(keyboard[i]);
    }
  }
})
