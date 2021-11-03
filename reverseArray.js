/* Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.  
There’s a built-in method that does a lot of this work for you (`array.prototype.reverse()`), but here you’re not allowed to use it. */

// Write your code here:
const reverseArray = array => {
  // Make a copy of the original array
  const reversedArray = array.slice();
  // Iterate over all elements of the array and place them in the opposite index
  reversedArray.forEach((element, index) => {
    reversedArray[index] = array[array.length - (index + 1)];
  });
  return reversedArray;
}

// When you're ready to test your code, uncomment the below and run:
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
