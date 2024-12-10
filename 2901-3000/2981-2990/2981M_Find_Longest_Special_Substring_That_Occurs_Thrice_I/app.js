// 2981. Find Longest Special Substring That Occurs Thrice I
// https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  let maxLength = -1;
  let left = 1;
  let right = s.length;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (hasSpecial(s, mid)) {
      maxLength = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return maxLength;

  function hasSpecial(s, windowSize) {
    let left = 0;
    const map = new Map();
    for (let right = 0; right < s.length; right++) {
      if (right > 0 && s[right] !== s[right - 1]) {
        left = right;
      }

      if (right - left + 1 < windowSize) continue;

      map.set(s[right], (map.get(s[right]) ?? 0) + 1);
      if (map.get(s[right]) === 3) return true;

      left++;
    }
    return false;
  }
};

var s = 'aaaa';
var expected = 2;
var result = maximumLength(s);
console.log(result, result === expected);

var s = 'abcdef';
var expected = -1;
var result = maximumLength(s);
console.log(result, result === expected);

var s = 'abcaba';
var expected = 1;
var result = maximumLength(s);
console.log(result, result === expected);

var s = 'cccerrrecdcdccedecdcccddeeeddcdcddedccdceeedccecde';
var expected = 2;
var result = maximumLength(s);
console.log(result, result === expected);
