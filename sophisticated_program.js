/*
 * Filename: sophisticated_program.js
 * Content: A sophisticated program that uses object-oriented programming concepts and advanced algorithms.
 */

// Class representing a shape
class Shape {
  constructor(name) {
    this.name = name;
  }

  calculateArea() {
    throw new Error('This method must be implemented in subclasses');
  }
}

// Class representing a rectangle
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Class representing a circle
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Function to find the sum of an array of numbers
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to find the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Helper function to check if a number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Main program
function main() {
  const rect = new Rectangle('Rectangle', 5, 10);
  const circle = new Circle('Circle', 7);

  console.log(`Shape: ${rect.name}, Area: ${rect.calculateArea()}`);
  console.log(`Shape: ${circle.name}, Area: ${circle.calculateArea()}`);

  const numbers = [1, 2, 3, 4, 5];
  const sum = sumArray(numbers);
  console.log(`Sum of numbers: ${sum}`);

  const num = 5;
  const fact = factorial(num);
  console.log(`Factorial of ${num}: ${fact}`);

  const checkPrime = 17;
  const isPrimeNumber = isPrime(checkPrime);
  console.log(`${checkPrime} is prime: ${isPrimeNumber}`);
}

main();