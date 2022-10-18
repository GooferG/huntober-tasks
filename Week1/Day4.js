// "   The white space at the beginning of this string doesn't match the whitespace at the end. "
// // reverse it
// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

// So far we've swapped out calculator characters, cleaned up after a cat and a preschooler, and placed some spaces. Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:

const reverseStr = (str) => str.split('').reverse().join('');
const newDay3Str = devStr.replace(/['A','_','K','E','Y','!']/g, ' ');
newDay3Str.split('').reverse().join('');
reverseStr(
  "   The white space at the beginning of this string doesn't match the whitespace at the end. "
);
