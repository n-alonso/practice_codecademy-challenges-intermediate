/* Write a function subLength() that takes 2 parameters, a string and a single character.  
The function should search the string for the two occurrences of the character and return the length between them including the 2 characters.  
If there are less than 2 or more than 2 occurrences of the character the function should return 0. */

// Write function below
const subLength = (string, letter) => {
  // Check how many times is the letter included in the string
  let counter = 0;
  string.split('').forEach(element =>
  {
    if (element === letter) counter++;
  });
  // Switch based on how many times the letter is included
  switch (counter) {
    case 2: // If 2, do the logic required
      console.log(string.lastIndexOf(letter) - string.indexOf(letter) + 1);
      break;
    default: // Else return 0
      console.log(0);
  }
}

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
subLength('funny', 'n'); // returns 2
