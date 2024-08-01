// 1062. Longest Repeating Substring
// https://leetcode.com/problems/longest-repeating-substring/description/
// T.C.: O(n log n)
// S.C.: O(n ^ 2)
/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function (s) {
  let n = s.length;
  let left = 1;
  let right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (hasRepeatingSubstring(mid) !== -1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left - 1;

  function hasRepeatingSubstring(len) {
    const seen = new Set();
    for (let i = 0; i < n - len + 1; i++) {
      const temp = s.substring(i, i + len);
      if (seen.has(temp)) return i;
      seen.add(temp);
    }
    return -1;
  }
};

var s = 'abcd';
var expected = 0;
var result = longestRepeatingSubstring(s);
console.log(result, result === expected);

var s = 'abbaba';
var expected = 2;
var result = longestRepeatingSubstring(s);
console.log(result, result === expected);

var s = 'aabcaabdaab';
var expected = 3;
var result = longestRepeatingSubstring(s);
console.log(result, result === expected);

var s = 'aaaaa';
var expected = 4;
var result = longestRepeatingSubstring(s);
console.log(result, result === expected);
