// 2433. Find The Original Array of Prefix Xor
// https://leetcode.com/problems/find-the-original-array-of-prefix-xor/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  for (let i = pref.length - 1; i > 0; i--) {
    pref[i] = pref[i] ^ pref[i - 1];
  }
  return pref;
};

var pref = [5, 2, 0, 3, 1];
var expected = [5, 7, 2, 3, 2];
var result = findArray(pref);
console.log(result, result.join() === expected.join());

var pref = [13];
var expected = [13];
var result = findArray(pref);
console.log(result, result.join() === expected.join());
