// 1790. Check if One String Swap Can Make Strings Equal
// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/?envType=study-plan&id=programming-skills-i
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let count = 0,
    arr1 = [],
    arr2 = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      arr1.push(s1[i]);
      arr2.push(s2[i]);
      count++;
    }
    if (count > 2) return false;
  }
  if (count === 2) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
  }
  return count === 0;
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
