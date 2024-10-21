// 1593. Split a String Into the Max Number of Unique Substrings
// https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/description/
// T.C.: O(n*2^n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
  return countUnique(0, new Set());

  function countUnique(start, unique) {
    if (start >= s.length) {
      return 0;
    }

    let maxCount = 0;
    let str = '';
    for (let end = start; end < s.length; end++) {
      str += s[end];
      if (!unique.has(str)) {
        unique.add(str);
        const count = 1 + countUnique(end + 1, unique);
        maxCount = Math.max(maxCount, count);
        unique.delete(str);
      }
    }
    return maxCount;
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
