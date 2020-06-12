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
     const rndm = Math.floor((Math.random() * 5));
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

   //checks if all letters f phrase has been guessed
   checkForWin() {
     const guess = document.getElementsByClassName('show');
     const space = document.getElementsByClassName('space');
     const guessLength = guess.length;
     const spaceLength = space.length;
     const finalGuess = guessLength + spaceLength;
     const phraseLength = this.activePhrase.phrase.length;

     if(finalGuess === phraseLength){
       this.gameOver(true);
     }
   };

   //removes a life if the wrong key is clicked
   removeLife(clicked) {
     const scoreboard = document.querySelectorAll('img');

     this.missed += 1;
     if (this.missed === 1) {
       scoreboard[0].src = 'images/lostHeart.png';
     } else if (this.missed === 2) {
       scoreboard[1].src = 'images/lostHeart.png';
     } else if (this.missed === 3) {
       scoreboard[2].src = 'images/lostHeart.png';
     } else if (this.missed === 4) {
       scoreboard[3].src = 'images/lostHeart.png';
     } else if (this.missed === 5) {
       scoreboard[4].src = 'images/lostHeart.png';
       this.gameOver(false);
     }
   };

   //ends game and displays a losing or winning screen
   gameOver(boo){
     if (boo) {
       const startScreen = document.getElementById('overlay');
       const gameOverMsg = document.getElementById('game-over-message');
       const banner = document.getElementById('banner');
       const youWin = document.createElement('h2');
       const header = banner.firstElementChild;

       startScreen.className = 'win';
       youWin.id = 'congrats';
       gameOverMsg.textContent = 'You win!'
       youWin.textContent = 'You win!';
       header.appendChild(youWin);

      const winScreen = () =>{
        startScreen.style.display = '';
        this.reset();
      }
      setTimeout(winScreen, 2000);
     } else {
       const startScreen = document.getElementById('overlay');
       const gameOverMsg = document.getElementById('game-over-message');

       startScreen.className = 'lose';
       startScreen.style.display = '';
       gameOverMsg.textContent = 'Try again?';
       this.reset();
    }
   };

   //resets all elements to their original state
   reset(){
     const phraseUl = document.getElementById('phrase').firstElementChild;
     const keyboard = document.querySelectorAll('button');
     const scoreboard = document.querySelectorAll('img');
     const youWin = document.getElementById('congrats');

     phraseUl.innerHTML = '';
     if (youWin !== null){
       youWin.innerHTML = '';
     }


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
