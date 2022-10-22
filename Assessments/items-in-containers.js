function numberOfItems(s, startIndices, endIndices) {
  // Write your code here
  let result = [];
  const countArr = {};
  let count = 0;
  for (let i = s.indexOf('|'); i < s.length; i++) {
    if (s[i] === '|') {
      countArr[i] = count;
    } else {
      count++;
    }
  }
  for (let i = 0; i < startIndices.length; i++) {
    let start = startIndices[i] - 1;
    let end = endIndices[i] - 1;
    while (s[start] !== '|') start++;
    while (s[end] !== '|') end--;
    console.log(start, end);
    result[i] = start < end ? countArr[end] - countArr[start] : 0;
  }
  return result;
}
