// 3228. Maximum Number of Operations to Move Ones to the End
// https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function (s) {
  const n = s.length;
  let ones = 0;
  let result = 0;
  let index = 0;
  while (index < n) {
    if (s[index] === '1') {
      ones++;
    } else {
      while (index + 1 < n && s[index + 1] === '0') {
        index++;
      }
      result += ones;
    }
    index++;
  }
  return result;
};

var s = '1001101';
var expected = 4;
var result = maxOperations(s);
console.log(result, result === expected);

var s = '00111';
var expected = 0;
var result = maxOperations(s);
console.log(result, result === expected);
