// https://leetcode.com/problems/number-of-1-bits/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const m = n.toString(2);
  let count = 0;
  let index = m.indexOf('1');
  while (index !== -1 && index < m.length) {
    count++;
    index = m.indexOf('1', index + 1);
  }
  return count;
};

var n = Number.parseInt('00000000000000000000000000001011', 2);
console.log(n, hammingWeight(n));
var n = Number.parseInt('00000000000000000000000010000000', 2);
console.log(n, hammingWeight(n));
var n = Number.parseInt('11111111111111111111111111111101', 2);
console.log(n, hammingWeight(n));
