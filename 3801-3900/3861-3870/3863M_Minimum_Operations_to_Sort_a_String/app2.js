// 3863. Minimum Operations to Sort a String
// https://leetcode.com/problems/minimum-operations-to-sort-a-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  const n = s.length;
  let mx = 'a';
  let mn = 'z';
  let sorted = true;
  for (let i = 0; i < n; i++) {
    if (s[i] > mx) {
      mx = s[i];
    }
    if (s[i] < mn) {
      mn = s[i];
    }
    if (i > 0 && s[i - 1] > s[i]) {
      sorted = false;
    }
  }
  if (sorted) {
    return 0;
  }
  if (n === 2) {
    return -1;
  }
  if (s[0] === mn || s[n - 1] === mx) {
    return 1;
  }
  for (let i = 1; i < n - 1; i++) {
    if (s[i] === mn || s[i] === mx) {
      return 2;
    }
  }
  return 3;
};

var s = 'dog';
var expected = 1;
var result = minOperations(s);
console.log(result, result === expected);

var s = 'card';
var expected = 2;
var result = minOperations(s);
console.log(result, result === expected);

var s = 'gf';
var expected = -1;
var result = minOperations(s);
console.log(result, result === expected);
