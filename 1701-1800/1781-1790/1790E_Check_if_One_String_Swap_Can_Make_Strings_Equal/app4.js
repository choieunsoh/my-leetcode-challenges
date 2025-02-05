// 1790. Check if One String Swap Can Make Strings Equal
// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/?envType=study-plan&id=programming-skills-i
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;

  let firstMismatchIndex = -1;
  let secondMismatchIndex = -1;
  let mismatches = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;

    mismatches++;
    if (mismatches > 2) {
      return false;
    } else if (mismatches === 1) {
      firstMismatchIndex = i;
    } else {
      secondMismatchIndex = i;
    }
  }

  return s1[firstMismatchIndex] === s2[secondMismatchIndex] && s1[secondMismatchIndex] === s2[firstMismatchIndex];
};

var s1 = 'bank',
  s2 = 'kanb';
var expected = true;
var result = areAlmostEqual(s1, s2);
console.log(result, result === expected);

var s1 = 'attack',
  s2 = 'defend';
var expected = false;
var result = areAlmostEqual(s1, s2);
console.log(result, result === expected);

var s1 = 'kelb',
  s2 = 'kelb';
var expected = true;
var result = areAlmostEqual(s1, s2);
console.log(result, result === expected);

var s1 = 'abcd',
  s2 = 'bcda';
var expected = false;
var result = areAlmostEqual(s1, s2);
console.log(result, result === expected);

var s1 = 'caa',
  s2 = 'aaz';
var expected = false;
var result = areAlmostEqual(s1, s2);
console.log(result, result === expected);
