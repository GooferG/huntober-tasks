// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// From: https://www.codewars.com/kata/5878520d52628a092f0002d0/

// const transformStr = (str) => {
//   const result = str.split('').map((l) => {
//     if (l === l.toUpperCase()) {
//       return l.toLowerCase();
//     } else if (l === l.toLowerCase()) {
//       return l.toUpperCase();
//     }
//   });
//   return result.join('').split(' ').reverse().join(' ').trim();
// };

const transformStr = (str) => {
  const reversedStr = str.split(' ').reverse().join(' ');
  const transformedStr = reversedStr
    .split('')
    .map((l) => (l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()))
    .join('');

  return transformedStr;
};

console.log(transformStr('Example Input'));
console.log(transformStr('Hello World'));
console.log(transformStr('T Pain'));
console.log(transformStr('Fucking Penny Licker'));
