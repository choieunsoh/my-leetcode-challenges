// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/
var hammingWeight = function (n: number): number {
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
};

var n = Number.parseInt('00000000000000000000000000001011', 2);
var expected = 3;
var result = hammingWeight(n);
console.log(result, result === expected);

var n = Number.parseInt('00000000000000000000000010000000', 2);
var expected = 1;
var result = hammingWeight(n);
console.log(result, result === expected);

var n = Number.parseInt('11111111111111111111111111111101', 2);
var expected = 31;
var result = hammingWeight(n);
console.log(result, result === expected);
