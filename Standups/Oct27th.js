// :eyesshaking: Please make sure you understand these before taking a look at the question:

// Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// indexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
// lastIndexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// From:
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

function duplicateEncode(word) {
  let isDuplicate = {};
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (letter in isDuplicate) {
      isDuplicate[letter] = true;
    } else {
      isDuplicate[letter] = false;
    }
  }
  let parenthesis = '';
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (isDuplicate[letter]) {
      parenthesis += ')';
    } else {
      parenthesis += '(';
    }
  }

  return parenthesis;
}
