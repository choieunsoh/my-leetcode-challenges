// 3803. Count Residue Prefixes
// https://leetcode.com/problems/count-residue-prefixes/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function (s) {
  let count = 0;
  const uniqueChar = new Set();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    uniqueChar.add(char);
    if (uniqueChar.size === (i + 1) % 3) {
      count++;
    }
    if (uniqueChar.size >= 3) return count;
  }
  return count;
};

var s = 'abc';
var expected = 2;
var result = residuePrefixes(s);
console.log(result, result === expected);

var s = 'dd';
var expected = 1;
var result = residuePrefixes(s);
console.log(result, result === expected);

var s = 'bob';
var expected = 2;
var result = residuePrefixes(s);
console.log(result, result === expected);

var s = 'ook';
var expected = 1;
var result = residuePrefixes(s);
console.log(result, result === expected);
