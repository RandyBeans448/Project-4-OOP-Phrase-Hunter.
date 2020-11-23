// Phase oject class.
//the phrase property sets the phrase argument toLowerCase.
//the phraseLetters is set to the value of the phrase property.
//Lastly we have matched to store all of the corretly guessed letters.

class Phrase {
      constructor(phrase) {
      this.phrase = phrase.toLowerCase();
      this.phraseLetters = this.phrase;
      this.matched = [];
    }

//This method adds the randomly generatored phrase to the phraseUl list and appends it
// to the div including the spaces.
//It also sets the classes respectivly.

  addPhraseToDisplay() {
     for (let i = 0; i < this.phraseLetters.length; i ++) {
       if (this.phraseLetters[i] === ' ') {
          const createLiSpace = document.createElement('li');
          createLiSpace.setAttribute('class', 'space');
          createLiSpace.innerHTML = ' ';
          phraseUl.appendChild(createLiSpace);
          this.matched.push(createLiSpace);
       } else {
         const createLiLetters = document.createElement('li');
         createLiLetters.setAttribute('class', 'hide letter ' + this.phraseLetters[i]);
         createLiLetters.innerHTML = this.phraseLetters[i];
         phraseUl.appendChild(createLiLetters);



       }
     }
  }

//This method loops through the array of hidden letters.
// Then it compares the innerText of the key clicked and the class letter.
// If its a match then it returns true.

  checkLetter(letter) {
  return this.phrase.includes(letter);


  }




//This method then revals the letters by switching the class.
//This then pushes the liElement to the matched array property

showMatchedLetter(letter) {
  for (let i = 0; i < liElements.length; i ++) {
    if (letter === liElements[i].textContent) {
      liElements[i].className = ('show letter ' + letter);
        this.matched.push(liElements[i]);
           console.log(this.matched.length);
         }
       }
     }
   }
