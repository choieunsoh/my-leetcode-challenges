// 1593. Split a String Into the Max Number of Unique Substrings
// https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/description/
// T.C.: O(n*2^n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
  let maxUniqueCount = 0;
  countUnique(0, 0, new Set());
  return maxUniqueCount;

  function countUnique(start, count, unique) {
    // Prune: If the current count plus remaining characters can't exceed maxCount, return
    if (count + (s.length - start) <= maxUniqueCount) return;

    // Base case: If we reach the end of the string, update maxCount
    if (start >= s.length) {
      maxUniqueCount = Math.max(maxUniqueCount, count);
      return;
    }

    // Try every possible substring starting from 'start'
    let str = '';
    for (let end = start; end < s.length; end++) {
      str += s[end];
      if (!unique.has(str)) {
        unique.add(str);
        countUnique(end + 1, count + 1, unique);
        unique.delete(str);
      }
    }
  }
};

var s = 'ababccc';
var expected = 5;
var result = maxUniqueSplit(s);
console.log(result, result === expected);

var s = 'aba';
var expected = 2;
var result = maxUniqueSplit(s);
console.log(result, result === expected);

var s = 'aa';
var expected = 1;
var result = maxUniqueSplit(s);
console.log(result, result === expected);

var s = 'wwwzfvedwfvhsww';
var expected = 11;
var result = maxUniqueSplit(s);
console.log(result, result === expected);
