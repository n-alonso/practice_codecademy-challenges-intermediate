/* Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.  
The greeting should take the following format:  
“Oh powerful [stringElement], we humans offer our unconditional surrender!”  
Note: You may have noticed how convenient it would be to use .forEach(), but you’re not allowed to use it here. */

// Write your code here:
const greetAliens = array => {
  for (let alien of array) {
    return `Oh powerful ${alien}, we humans offer our unconditional surrender!`
  }
}

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

console.log(greetAliens(aliens));
