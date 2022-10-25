// The Challenge - Day 6
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Thanks for all your help yesterday, you guys are cool cats! Today's challenge will have you removing decoy characters from a string.

//! Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

// For example:

// For the string below and 4
// "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// remove decoy strings
// "This is Halloween! This is Halloween!"

// For the string below and 5
// "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// remove decoy strings and preach 🙌
// "The Bachelor is a terrible television show."

// String.prototype.removeAt = function (index) {
//   let array = Array.from(this);
//   delete array[index];
//   let str = array.reduce((acc, char) => (acc += char), '');
//   return str;
// };

// function removeXChar(string, index) {
//   for (let i = index; i < string.length; i = i + index ) {
//     string = string.removeAt(i);
//   }
//   return string;
// }

function removeXChar(str, n) {
  // Create an array from the string
  const arr = str.split('');

  // Iterate over the array
  // We make sure to create a separate variable for the
  // array length so that we can decrement when the
  // condition is met
  for (let i = 0, l = arr.length; i < l; i++) {
    // We want to match the index of the character to `n`
    // We use modulo here to check the remainder,
    // but we don't want to eliminate the character at index 0
    if (i > 0 && i % n === 0) {
      // When the condition is met, splice out the element
      // and decrement the length value
      arr.splice(i, 1);
      l--;
    }
  }

  // Return a joined-up array
  return arr.join('');
}

const test1 = removeXChar('Thies its H alltowe!en!?', 3);
console.log(test1);

// ------------------------------- //
// 🧩 Start Putting it Together

// Tomorrow is day 7 of 7, and you'll be receiving a final function assignment as well as the task of putting all of your other functions from the week together in sequence.

// If you like, you can get started on piecing together your functions today. Please remember that the functions must be performed on the provided string in order. If you do things out of order it will get messy very fast.

// It is totally up to you how you want to organize your code. Some may choose to create a master decoding function that calls each helper function as needed, while others may prefer to chain the function calls separately. Up to you.

// Note: Day 2 and Day 5 were side-projects, and their real purpose was to provide you with inputs for this final decoding. Day 2's key characters and Day 5's final count will be used as arguments for Day 3 and Day 6's functions, respectively.

// Here's the encrypted string for the week, enjoy!

// const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
// Do any of you have any guesses about what the message could be? I think it'll stay unsolved until tomorrow, but who knows?
