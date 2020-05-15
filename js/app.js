/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 // //Test Phrase Array
 // const game = new Game();
 // game.phrases.forEach((phrase, index) => {
 // console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
 // });

 // //Test getRandomPhrase()
 // const logPhrase = (phrase) => {
 // console.log(`Phrase - phrase: `, phrase.phrase);
 // };
 // const game = new Game();
 // logPhrase(game.getRandomPhrase());
 // logPhrase(game.getRandomPhrase());
 // logPhrase(game.getRandomPhrase());
 // logPhrase(game.getRandomPhrase());
 // logPhrase(game.getRandomPhrase());

 // //Test addPhrasetoDisplay()
 // const game = new Game();
 // const randomPhrase = game.getRandomPhrase();
 // const phrase = new Phrase(randomPhrase.phrase);
 // phrase.addPhraseToDisplay();

 // //Test StartGame();
 // const game = new Game();
 // game.startGame();
 // console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//Begin app code

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
