// 3090. Maximum Length Substring With Two Occurrences
// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  let maxLength = 0;
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let left = 0, right = 0; right < s.length; right++) {
    const rightIndex = s.charCodeAt(right) - a;
    counts[rightIndex]++;
    while (counts[rightIndex] > 2) {
      const leftIndex = s.charCodeAt(left) - a;
      counts[leftIndex]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

var s = 'bcbbbcba';
var expected = 4;
var result = maximumLengthSubstring(s);
console.log(result, result === expected);

var s = 'aaaa';
var expected = 2;
var result = maximumLengthSubstring(s);
console.log(result, result === expected);
