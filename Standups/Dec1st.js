// One we have seen before as we transition away from katas... Make sure you talk through prep and Big O!

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// Hint: Loop with conditionals that use modulus

// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

function fizzBuzz(n) {
  let fizzBuzzArr = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      fizzBuzzArr.push('FizzBuzz');
    } else if (i % 2 === 0) {
      fizzBuzzArr.push('Fizz');
    } else if (i % 3 === 0) {
      fizzBuzzArr.push('Buzz');
    } else {
      fizzBuzzArr.push(i);
    }
  }
  return fizzBuzzArr;
}

console.log(fizzBuzz(16));
