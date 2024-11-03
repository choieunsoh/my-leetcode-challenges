// 1180. Count Substrings with Only One Distinct Letter
// https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function (s) {
  let total = 1;
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i - 1)) {
      count++;
    } else {
      count = 1;
    }
    total += count;
  }
  return total;
};

var s = 'aaaba';
var expected = 8;
var result = countLetters(s);
console.log(result, result === expected);

var s = 'aaaaaaaaaa';
var expected = 55;
var result = countLetters(s);
console.log(result, result === expected);
