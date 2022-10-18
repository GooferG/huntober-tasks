// For day 3:
// We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). See below for an example with an example set of key characters.
let devString =
  ' !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs';

let keyChar = ['A', '_', 'K', 'E', 'Y', '!'];

// const day3Str ='AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'

let combinedStr = devString.replace(/['A', '_', 'K', 'E', 'Y', '!']/g, ' ');

const devUpdatedStr = combinedStr.split('').reverse().join('');
// correctStr(combinedStr.replace(/['A','_','K','E','Y','!']/g, ''))
console.log(devUpdatedStr);
