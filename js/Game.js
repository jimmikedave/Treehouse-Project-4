/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
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

   //returns a phrase at random
   getRandomPhrase() {
     const rndm = Math.floor((Math.random() * 4));
     return this.phrases[rndm];
   };

   //removes overlay to display the game page
   startGame() {
     const startScreen = document.getElementById('overlay');
     const randomPhrase = this.getRandomPhrase().phrase;

     startScreen.style.display = 'none';

     this.activePhrase = new Phrase (randomPhrase);
     this.activePhrase.addPhraseToDisplay();

   };

   //handles onscreen clicks
   handleInteraction(clicked) {
     clicked.disabled = true;
     if (this.activePhrase.checkLetter(clicked.textContent)){
       clicked.className = 'chosen';
       this.activePhrase.showMatchedLetter(clicked);
       this.checkForWin();
     } else {
       clicked.className = 'wrong';
       this.removeLife();
     }
   }

   //displays winning screen if finalGuess = activePhrase
   checkForWin() {
     const guess = document.getElementsByClassName('show');
     const space = document.getElementsByClassName('space');
     const guessLength = guess.length;
     const spaceLength = space.length;
     const finalGuess = guessLength + spaceLength;
     const phraseLength = this.activePhrase.phrase.length;
     const startScreen = document.getElementById('overlay');
     const gameOverMsg = document.getElementById('game-over-message');

     startScreen.className = 'win';
     gameOverMsg.textContent = 'You win!'

     if(finalGuess === phraseLength){
       startScreen.style.display = '';
       this.reset();
     }
   };

   //removes a life if the wrong key is clicked
   removeLife(clicked) {
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

   //ends game and displays losing screen
   gameOver(){
     const startScreen = document.getElementById('overlay');
     const gameOverMsg = document.getElementById('game-over-message');

     startScreen.className = 'lose';
     startScreen.style.display = '';
     gameOverMsg.textContent = 'Try again?';

     this.reset();
   };

   //resets all elements to their original state
   reset(){
     const phraseUl = document.getElementById('phrase').firstElementChild;
     const keyboard = document.querySelectorAll('button');
     const scoreboard = document.querySelectorAll('img');

     phraseUl.innerHTML = '';

     for(i = 0; i < keyboard.length; i += 1) {
       if (keyboard[i].disabled === true){
       keyboard[i].className = 'key';
       keyboard[i].disabled = false;
      }
     }

     scoreboard.forEach(score => score.src = 'images/liveHeart.png');
     this.missed = 0;

   };
 };
