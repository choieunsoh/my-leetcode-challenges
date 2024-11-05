// 2914. Minimum Number of Changes to Make Binary String Beautiful
// https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i += 2) {
    if (s[i] !== s[i + 1]) count++;
  }
  return count;
};

var s = '1001';
var expected = 2;
var result = minChanges(s);
console.log(result, result === expected);

var s = '10';
var expected = 1;
var result = minChanges(s);
console.log(result, result === expected);

var s = '0000';
var expected = 0;
var result = minChanges(s);
console.log(result, result === expected);
