// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Hint: loop through the characters and use bracket notation to add one to the value for that letter in the object or add that letter as a property of the object with the value of 1

// From: https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
  let countObj = {};
  // The function code should be here
  string
    .split('')
    // countObj[letter] = countObj = {'letter': x}
    .map((letter) => (countObj[letter] = countObj[letter] + 1 || 1));
  // return the obj with the count
  return countObj;
}
