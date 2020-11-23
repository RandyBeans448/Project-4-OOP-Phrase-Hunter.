//This is the game constructor Class. Setting the inital values of the missed property to 0.
//This tracks the amount of guesses the player has had
//The phrases property holds an array of all potential phrases used in the game.
//The  activePhrase tells us which phrase is active or not.

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [new Phrase('Use the force'),
                    new Phrase('Great kid Dont get cocky'),
                    new Phrase('Stay on target'),
                    new Phrase('Its a trap'),
                    new Phrase('Never tell me the odds'),
                    new Phrase('No I am your father')
                   ];
    this.activePhrase = null;
  }

//Cycles through the phrases array and selects one at random.

getRandomPhrase() {
  const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return randomPhrase;
};

//Setting the initial game overlay to be hidden.
//Calling the getRandomPhrase() method on the property activePhrase to set its value.
//Then call the addPhraseToDisplay() method to display activePhrase as list items on the page.

startGame() {
  overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
  }

//This method actives when the user clicks on the keybord and disables the target
//Its then calls the correct methods when certain parameters are met

handleInteraction(letter) {
event.target.disabled = true;
event.target.style.backgroundColor = 'white';
event.target.style.color = 'white';


if (this.activePhrase.checkLetter(letter) !== true) {
  event.target.classList.add('wrong');
  this.removeLife();
}

if (this.activePhrase.checkLetter(letter)) {
    this.activePhrase.showMatchedLetter(letter);
    event.target.classList.add('chosen');
    if (this.checkForWin()) {
      this.gameOver();
    };
  }
}


//If any of the liElements have the class of 'show' then the checkForWin() method and returns true.

checkForWin() {
  const hidden = document.querySelectorAll('.hide');
    if (hidden.length > 0) {
      return false
        } else {
          return true

        }
      }

//removeLife() replaces the liveHeart.png to the lostHeart.png
// and adds another counter to the this.missed property

removeLife() {
  lives[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    console.log(this.missed);
      if (this.missed === 5) {
        this.gameOver();
    }
  }


//gameOver checks to see what conditions are met and changes the overlay accordingly
//and then calls the reset method

gameOver() {
if (this.checkForWin() === true) {
    overlay.style.display = '';
      overlay.style.backgroundColor = 'green';
        gameOverMessage.textContent = 'You win!';
        this.reset();
  } else {
           overlay.style.display = '';
            overlay.style.backgroundColor = 'red';
             gameOverMessage.textContent = 'Sorry, better luck next time!';
             this.reset()
           }
         }

//The reset method is called depeding on the color of the overlay
//It then set the phraseUl to nothing
//Sets the hearts back to live
//And finaly resets the keyboard keys to the original colour


reset() {
  if (overlay.style.backgroundColor === 'red' || overlay.style.backgroundColor === 'green') {
      phraseUl.innerHTML = '';
       this.missed = 0;
       lives.forEach(live => { live.src = "images/liveHeart.png" });
          keyboard.forEach(key => {
              key.disabled = false;
              key.classList.remove('wrong');
              key.classList.remove('chosen');
              key.style.backgroundColor = '#E5E5E5';
              key.style.color = 'black';
            });
           }
          }
        }
