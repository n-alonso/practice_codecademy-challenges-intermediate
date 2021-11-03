/* Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string  
in the array prepended with 'baby '.  
Note: You may have noticed how convenient it would be to use built-in methods, but you’re not allowed to use them here.  */

// Write your code here:
const convertToBaby = array => {
  const babiesArray = [];
  for (let element of array) {
    babiesArray.push(`baby ${element}`);
  }
  return babiesArray;
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 
