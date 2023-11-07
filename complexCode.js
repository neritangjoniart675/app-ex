/* 
   Filename: complexCode.js

   Description: This code demonstrates a complex algorithm for generating a Fibonacci sequence up to a given limit. It utilizes memoization for efficient computation and implements various helper functions to manipulate and validate the input.

   Author: [Your Name]
   Email: [Your Email]
   Date: [Today's Date]
*/

// Function to validate and get user input
function getInput() {
  let limit = parseInt(prompt('Enter a positive integer to generate the Fibonacci sequence up to:'));
  
  if (Number.isNaN(limit) || limit <= 0) {
    console.log('Invalid input. Please enter a positive integer.');
    return getInput();
  }
  
  return limit;
}

// Function to generate Fibonacci sequence up to the given limit
function generateFibSequence(limit) {
  let sequence = [0, 1];
  
  if (limit === 1) {
    return [sequence[0]];
  } else if (limit === 2) {
    return sequence;
  }
  
  while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= limit) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  
  return sequence;
}

// Function to memoize Fibonacci sequence generation
function memoize(func) {
  const cache = {};
  
  return function (...args) {
    const key = JSON.stringify(args);
    
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

// Function to format the Fibonacci sequence for printing
function formatSequence(sequence) {
  let formattedSequence = '';
  
  for (let i = 0; i < sequence.length; i++) {
    formattedSequence += sequence[i];
    
    if (i < sequence.length - 1) {
      formattedSequence += ', ';
    }
  }
  
  return formattedSequence;
}

// Main code
function main() {
  const limit = getInput();
  const memoizedGenerateFibSequence = memoize(generateFibSequence);
  const fibonacciSequence = memoizedGenerateFibSequence(limit);
  const formattedSequence = formatSequence(fibonacciSequence);
  
  console.log('Generated Fibonacci sequence up to ' + limit + ':');
  console.log(formattedSequence);
}

// Execute the main function
main();