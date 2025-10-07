// 2839. Check if Strings Can be Made Equal With Operations I
// https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
  // Check the even-indexed characters {s1[0], s1[2]} and {s2[0], s2[2]}
  const evenPairMatch = (s1[0] === s2[0] && s1[2] === s2[2]) || (s1[0] === s2[2] && s1[2] === s2[0]);

  // Check the odd-indexed characters {s1[1], s1[3]} and {s2[1], s2[3]}
  const oddPairMatch = (s1[1] === s2[1] && s1[3] === s2[3]) || (s1[1] === s2[3] && s1[3] === s2[1]);

  return evenPairMatch && oddPairMatch;
};

var s1 = 'abcd',
  s2 = 'cdab';
var expected = true;
var result = canBeEqual(s1, s2);
console.log(result, result === expected);

var s1 = 'abcd',
  s2 = 'cbad';
var expected = true;
var result = canBeEqual(s1, s2);
console.log(result, result === expected);

var s1 = 'abcd',
  s2 = 'abcd';
var expected = true;
var result = canBeEqual(s1, s2);
console.log(result, result === expected);

var s1 = 'abcd',
  s2 = 'dacb';
var expected = false;
var result = canBeEqual(s1, s2);
console.log(result, result === expected);

var s1 = 'cmpr',
  s2 = 'rmcp';
var expected = false;
var result = canBeEqual(s1, s2);
console.log(result, result === expected);
