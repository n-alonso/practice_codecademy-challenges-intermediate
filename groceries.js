/* Write a function groceries() that takes an array of object literals of grocery items.  
The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'.  
Make sure spaces (' ') are inserted where they are appropriate. */

// Write function below
const groceries = array => {
  //We need different logic for the first, last, and middle elements of the array, so we will separate them first
  let firstItem = array.shift().item;
  let lastItem;
  if (array.length !== 0) lastItem = array.pop().item; // Checking if there are enough elements in the array to perform the operation
  let midItems = '';
  if (array.length !== 0) array.forEach(element => midItems += `, ${element.item}`); // Checking if there are enough elements in the array to perform the operation
  // If any of the previous operations was not performed due to insuficient items in the array, they would log as 'undefined' in the result, so we need 
  // conditional loggin to the console for the result
  if (midItems) {
    console.log(`${firstItem}${midItems} and ${lastItem}`)
  } else if (lastItem) {
    console.log(`${firstItem} and ${lastItem}`)
  } else {
    console.log(firstItem)
  }
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])
// returns 'Lettuce, Onions and Tomatoes'. 
