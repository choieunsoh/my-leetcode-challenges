// 1758. Minimum Changes To Make Alternating Binary String
// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let changes = [0, 0];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (i % 2 === 0) {
      if (c === '1') changes[0]++;
      else changes[1]++;
    } else {
      if (c === '0') changes[0]++;
      else changes[1]++;
    }
  }
  return Math.min(...changes);
};

var s = '0100';
var expected = 1;
var result = minOperations(s);
console.log(result, result === expected);

var s = '10';
var expected = 0;
var result = minOperations(s);
console.log(result, result === expected);

var s = '1111';
var expected = 2;
var result = minOperations(s);
console.log(result, result === expected);
