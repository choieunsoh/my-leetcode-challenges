// 3210. Find the Encrypted String
// https://leetcode.com/problems/find-the-encrypted-string/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
  k = k % s.length;
  if (k === 0) return s;
  return s.substring(k) + s.substring(0, k);
};

var s = 'dart',
  k = 3;
var expected = 'tdar';
var result = getEncryptedString(s, k);
console.log(result, result === expected);

var s = 'aaa',
  k = 1;
var expected = 'aaa';
var result = getEncryptedString(s, k);
console.log(result, result === expected);
