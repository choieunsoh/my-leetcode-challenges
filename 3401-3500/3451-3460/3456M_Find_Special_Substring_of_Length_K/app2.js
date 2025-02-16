// 3456. Find Special Substring of Length K
// https://leetcode.com/problems/find-special-substring-of-length-k/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s, k) {
  if (k > s.length) return false;

  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      if (count === k && s[i - k - 1] !== s[i - 1]) {
        return true;
      }
      count = 1;
    }
  }
  return count == k;
};

var s = 'aaabaaa',
  k = 3;
var expected = true;
var result = hasSpecialSubstring(s, k);
console.log(result, result === expected);

var s = 'abc',
  k = 2;
var expected = false;
var result = hasSpecialSubstring(s, k);
console.log(result, result === expected);

var s = 'aabaaaacaaada',
  k = 3;
var expected = true;
var result = hasSpecialSubstring(s, k);
console.log(result, result === expected);

var s = 'a',
  k = 1;
var expected = true;
var result = hasSpecialSubstring(s, k);
console.log(result, result === expected);
