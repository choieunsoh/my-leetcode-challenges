// 1513. Number of Substrings With Only 1s
// https://leetcode.com/problems/number-of-substrings-with-only-1s/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  const MOD = 1e9 + 7;
  let total = 0;
  let oneCount = 0;
  for (const ch of s) {
    if (ch === '1') {
      oneCount++;
      total = (total + oneCount) % MOD;
    } else {
      oneCount = 0;
    }
  }
  return total;
};

var s = '0110111';
var expected = 9;
var result = numSub(s);
console.log(result, result === expected);

var s = '101';
var expected = 2;
var result = numSub(s);
console.log(result, result === expected);

var s = '111111';
var expected = 21;
var result = numSub(s);
console.log(result, result === expected);
