// https://leetcode.com/problems/number-of-1-bits/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).replace(/0/gi, '').length;
};

var n = Number.parseInt('00000000000000000000000000001011', 2);
console.log(n, hammingWeight(n));
var n = Number.parseInt('00000000000000000000000010000000', 2);
console.log(n, hammingWeight(n));
var n = Number.parseInt('11111111111111111111111111111101', 2);
console.log(n, hammingWeight(n));
