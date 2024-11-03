// 1180. Count Substrings with Only One Distinct Letter
// https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function (s) {
  let count = 0;
  let start = 0;
  for (let end = 0; end <= s.length; end++) {
    if (s[end] === s[end + 1]) continue;
    const range = end - start + 1;
    count += (range * (range + 1)) / 2;
    start = end + 1;
  }
  return count;
};

var s = 'aaaba';
var expected = 8;
var result = countLetters(s);
console.log(result, result === expected);

var s = 'aaaaaaaaaa';
var expected = 55;
var result = countLetters(s);
console.log(result, result === expected);
