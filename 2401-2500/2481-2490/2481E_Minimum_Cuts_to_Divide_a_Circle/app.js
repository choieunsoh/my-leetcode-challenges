// 2481. Minimum Cuts to Divide a Circle
// https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
  if (n === 1) return 0;
  return n % 2 === 0 ? n / 2 : n;
};

var n = 4;
var expected = 2;
var result = numberOfCuts(n);
console.log(result, result === expected);

var n = 3;
var expected = 3;
var result = numberOfCuts(n);
console.log(result, result === expected);
