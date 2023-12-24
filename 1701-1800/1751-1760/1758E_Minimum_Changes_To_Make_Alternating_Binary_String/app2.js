// 1758. Minimum Changes To Make Alternating Binary String
// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let odd = [0, 0];
  let even = [0, 0];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (i % 2 === 0) {
      even[c]++;
    } else {
      odd[c]++;
    }
  }
  return Math.min(even[0] + odd[1], even[1] + odd[0]);
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
