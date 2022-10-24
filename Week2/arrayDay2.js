// 🏆 The Challenge - Day 2
// This week we'll be working with arrays toward a final puzzling result on Friday when we combine our daily functions. Your solutions should be built to work within any given daily constraints.

// So it turns out that some of the information I stored ever-so-safely in arrays just isn't looking right. I'm not going to be happy until it feels right, you know what I mean? Could you help me rearrange things a bit?

// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The given primitive value will only occur once in the array
// The array passed in should be mutated by this function. Scandalous, I know.
// Example:

myArray = ['abc', 'xyz', 1, 2, 'Hey!'];

// call move left function with 'xyz' and myArray as arguments
console.log(myArray); // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
console.log(myArray); // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
console.log(myArray); // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
console.log(myArray); // ['xyz', 'abc', 1, 'Hey!', 2] no change
// Got it? Great! I can't wait to get moving things around.

// PREP
// Parameters: array of values
// Requiremes: Need to move it either index + 1 or index -1
// Example: moveLeft(['abc', 'xyz', 1, 2, 'Hey!']) -> ['xyz', 'abc', 1, 2, 'Hey!']
// PseudoCode: if moving right, indexOf + 1, if moving left, IndexOf - 1

const moveLeft = (arr, item) => {
  const idx = arr.indexOf(item);
  console.log(idx);
  if (idx === 0) return;

  const temp = arr[idx - 1];
  arr[idx - 1] = arr[idx];
  arr[idx] = temp;
};

moveLeft(myArray, 'xyz');
console.log(myArray);

const moveRight = (arr, item, itemToMove) => {
  const idx = arr.indexOf(item);
  console.log(idx);
  if (idx === arr.length - 1) return;

  const temp = arr[idx + 1];
  arr[idx + 1] = arr[idx];
  arr[idx] = temp;
};

moveRight(myArray, 'xyz');
console.log(myArray);
moveRight(myArray, 2);
console.log(myArray);
