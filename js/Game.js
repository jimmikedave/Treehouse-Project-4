/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(){
     this.missed = 0;
     this.phrases = [
       {phrase: 'someone please revive me'},
       {phrase: 'i lost my gulag'},
       {phrase: 'do you want some soup'},
       {phrase: 'thats a good doge'},
       {phrase: 'console log'},
     ];
     this.activePhrase = null;
   }

   getRandomPhrase(){
     //grab a random phrase from this.phrases
     const rndm = Math.floor((Math.random() * 4));
     return this.phrases[rndm];
   };

   startGame(){
     const startScreen = document.getElementById('overlay');
     const randomPhrase = this.getRandomPhrase().phrase;

     //hides the start screen overlay div w/ id=overlay
     startScreen.style.display = 'none';

     //add random Phrase to activePhrase
     this.activePhrase = new Phrase (randomPhrase);

     //displays random phrase placeholders
     this.activePhrase.addPhraseToDisplay();
   };

   handleInteraction(clicked){
     clicked.disabled = true;
     if (this.activePhrase.checkLetter(clicked.textContent) === true){
       clicked.className = 'chosen';
       this.activePhrase.showMatchedLetter(clicked);
     } else {
       clicked.className = 'wrong';
       this.removeLife();
     }
   }
   checkForWin(){

   };

   removeLife(clicked){
     const scoreboard = document.querySelectorAll('img');
     this.missed += 1;
     if (this.missed === 1) {
       scoreboard[0].src = 'images/lostheart.png';
     } else if (this.missed === 2) {
       scoreboard[1].src = 'images/lostheart.png';
     } else if (this.missed === 3) {
       scoreboard[2].src = 'images/lostheart.png';
     } else if (this.missed === 4) {
       scoreboard[3].src = 'images/lostheart.png';
     } else if (this.missed === 5) {
       scoreboard[4].src = 'images/lostheart.png';
       this.gameOver();
     }
   };
   gameOver(){
     const startScreen = document.getElementById('overlay');
     const gameOverMsg = document.getElementById('game-over-message');

     startScreen.className = 'lose';
     startScreen.style.display = '';
     gameOverMsg.textContent = 'Try again?';

     list.innerHTML = '';
   };
 };
