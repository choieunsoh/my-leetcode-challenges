// 1876. Substrings of Size Three with Distinct Characters
// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let result = 0;
  for (let i = 0; i < s.length - 2; i++) {
    const sub = s.slice(i, i + 3);
    const set = new Set(sub);
    if (set.size === 3) result++;
  }
  return result;
};

var s = 'xyzzaz';
var expected = 1;
var result = countGoodSubstrings(s);
console.log(result, result === expected);

var s = 'aababcabc';
var expected = 4;
var result = countGoodSubstrings(s);
console.log(result, result === expected);

var s = 'owuxoelszb';
var expected = 8;
var result = countGoodSubstrings(s);
console.log(result, result === expected);
