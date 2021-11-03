/* Write a function factorial() that takes a number as an argument and returns the factorial of the number. */

// Write function below
const factorial = number => {
  let counter = 1;
  let factorial = 1;
  do {
    factorial = factorial * counter;
    counter++;
  } while (counter <= number)
  console.log(factorial);
}

// Test
factorial(6);
