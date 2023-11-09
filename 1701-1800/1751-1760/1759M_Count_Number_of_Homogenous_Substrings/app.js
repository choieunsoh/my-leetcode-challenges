// 1759. Count Number of Homogenous Substrings
// https://leetcode.com/problems/count-number-of-homogenous-substrings/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  const MOD = 1e9 + 7;
  let result = 0;
  let left = 0;
  for (let right = 1; right <= s.length; right++) {
    if (s.charAt(right) !== s.charAt(left)) {
      const len = right - left;
      result = (result + (len * (len + 1)) / 2) % MOD;
      left = right;
    }
  }
  return result;
};

var s = 'abbcccaa';
var expected = 13;
var result = countHomogenous(s);
console.log(result, result === expected);

var s = 'xy';
var expected = 2;
var result = countHomogenous(s);
console.log(result, result === expected);

var s = 'zzzzz';
var expected = 15;
var result = countHomogenous(s);
console.log(result, result === expected);

var s = 'w'.repeat(1e5);
var expected = 49965;
var result = countHomogenous(s);
console.log(result, result === expected);
