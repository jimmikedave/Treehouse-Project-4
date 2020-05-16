/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   //adds placeholders for phrase letters
   addPhraseToDisplay() {
     const phraseUl = document.querySelector('ul');
     const phraseLetters = this.phrase.split('');

     phraseLetters.forEach(letter => {
       const phraseLetter = document.createElement('li');
       phraseLetter.textContent = letter;
       if (letter === ' '){
         phraseLetter.className = 'space';
       } else {
         phraseLetter.className = `hide letter ${letter}`;
       }
       phraseUl.appendChild(phraseLetter);
     })
   }

   //checks if a clicked letter matches the activePhrase
   checkLetter(letter) {
     if (this.phrase.includes(letter)) {
       return true;
     } else {
       return false;
     }
   }

   //if the clicked letter matches the activePhrase the letter is shown
   showMatchedLetter(letter) {
     const li = document.querySelector('ul').children;

     for(i = 0; i < li.length; i += 1) {
       if (li[i].textContent === letter.textContent){
         li[i].className = 'show';
       }
     }
   };
 };
