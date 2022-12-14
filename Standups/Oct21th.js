// Make sure you understand these before taking a look at the question:
// Filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
// Slice(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

// DON'T WORRY ABOUT COMPLEXITY - we are using this one to practice our array methods!

// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// From: https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/solutions/javascript

// Hint: Filter the even numbers and slice the end using the -n syntax

// function evenNumbers(array, number) {
//   let evens = [];
//   array.map((x) => {
//     if (x % 2 === 0) {
//       evens.push(x);
//     }
//   });
//   return evens.splice(-number);
// }

// One liner:

/**
 * It filters the array for even numbers, then returns the last n numbers of the filtered array
 * @param array - an array of integers
 * @param number - The number of items to return.
 */
const evenNumbers = (array, number) =>
  array.filter((item) => item % 2 === 0).slice(-number);

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), '[4,6,8]');
