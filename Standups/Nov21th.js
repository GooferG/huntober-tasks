// This question is setting us up for a more complicated question next Monday!

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// Hint: filter values that don't equal the next value

// From:
// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/

const removeConsecutiveDuplicates = (s) => {
  const uniques = s.split(' ');
  return uniques;
};
console.log(
  removeConsecutiveDuplicates(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  ),
  'alpha beta gamma delta alpha beta gamma delta'
);
