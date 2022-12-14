// Day 1 String Huntober

let devStr = 'e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs';

// Day 1 String Huntober

const letter = {
  0: 'O',
  1: 'I',
  2: 'Z',
  3: 'E',
  4: 'h',
  5: 'S',
  6: 'G',
  7: 'L',
  8: 'B',
  9: 'q',
  O: '0',
  I: '1',
  Z: '2',
  E: '3',
  h: '4',
  S: '5',
  G: '6',
  L: '7',
  B: '8',
  q: '9',
};

function correctStr(str) {
  return str
    .split('')
    .map((c) => letter[c] || c)
    .join('');
}
const updatedStr = correctStr(`PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.`);
console.log(updatedStr);
const devStrUpdated = correctStr(devStr);
console.log(devStrUpdated);
