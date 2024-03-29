/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  const result = [0, 0];
  const num = n.toString(2).split('').reverse();
  const len = num.length;
  for (let i = 0; i < len; i++) {
    console.log(num[i]);
    if (num[i] === '0') continue;
    if (i % 2 === 0) result[0]++;
    else result[1]++;
  }
  return result;
};

var n = 17;
var expected = [2, 0];
var result = evenOddBit(n);
console.log(result, result.join() === expected.join());

var n = 2;
var expected = [0, 1];
var result = evenOddBit(n);
console.log(result, result.join() === expected.join());
