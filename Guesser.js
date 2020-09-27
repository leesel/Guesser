function letterGuesser () {
  
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let randomNum = Math.floor(Math.random() * alphabet.length);
    let randomLetter = alphabet[randomNum];
    let randomLetterIndex = alphabet.indexOf(randomLetter);
    let guess = parseInt(prompt(`You have recieved letter "${randomLetter}", What is ${randomLetter}'s index number?'`));
    if (guess === randomLetterIndex){
      alert(`It's a genius - You know your abc's!`);
    } else {
      alert(`Uh oh - The index of ${randomLetter} is actually ${randomLetterIndex}, please relearn your abc's.`);
    }
  }
  
  letterGuesser();