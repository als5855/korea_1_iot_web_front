// const userInput = "Hello World";

// let newUserInput =  userInput.trim().split(' ').reverse().join('');

// console.log(newUserInput.toUpperCase());



// mathOperation.js

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
} 



// main.js

import { add } from './mathModule.js';
import { subtract } from './mathModule.js'

import multi from './mathModule.js'

console.log(add(13, 16));
console.log(subtract(10, 6));
console.log(multi(13, 16));

