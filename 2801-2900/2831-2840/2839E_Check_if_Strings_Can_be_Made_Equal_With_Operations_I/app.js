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
  if (s1 === s2) return true;
  const n = s1.length;
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i] && s1[i] !== s2[(i + 2) % n]) {
      return false;
    }
  }
  return true;
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
