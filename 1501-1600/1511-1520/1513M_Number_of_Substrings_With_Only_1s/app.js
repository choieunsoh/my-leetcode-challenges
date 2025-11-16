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
  const oneBlocks = s.split('0').filter(Boolean);
  for (const block of oneBlocks) {
    const oneCount = block.length;
    total = (total + (oneCount * (oneCount + 1)) / 2) % MOD;
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
