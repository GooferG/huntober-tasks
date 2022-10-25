// Let's GET SPICY!  :zoom:

// :eyesshaking:  Please make sure you understand these before taking a look at the question:
//! Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
//! Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
//! Set (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

// From: https://www.codewars.com/kata/59e66e48fc3c499ec5000103

// 🙏🏾  Please spend time really digesting the problem and working through the test cases! Make sure you can solve each test case with just your brain first.

// Going over the solution to the coding challenge:
function solve(arr) {
  // map over each member of the array
  // create a new set for each array, this removes any duplicates
  // use the size property of Set to show the number of items in the sub array (similar to array.length)
  // use reduce to multiply each sub array to give the result.
  return arr.map((sA) => new Set(sA).size).reduce((a, c) => a * c, 1);
}

// A fancy one-liner:
// pass in the array
// reduce, take the accumulator, multiply this by the size of the Set subarray
const solve = (arr) => arr.reduce((a, c) => a * new Set(c).size, 1);

// Short Q&A today, a few pointers:
// if asked for salary expectations, respond with "fair market rate for a developer of my experience". If they persist, ask "what have you budgeted for the role"
// put university/college experience on the bottom of your resume (use the template)
// Generally, try to end an interview expressing your excitement about the role (this was in relation to someone wondering if they ended their interview awkwardly with what they said)
