// 712. Minimum ASCII Delete Sum for Two Strings
// https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
// T.C.: O(3^n * n)
// S.C.: O(n)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  return computeCost(s1, s2, s1.length - 1, s2.length - 1);

  function computeCost(s1, s2, i, j) {
    // If s1 is empty, then we need to delete all characters of s2
    if (i < 0) {
      let deleteCost = 0;
      for (let pointer = 0; pointer <= j; pointer++) {
        deleteCost += s2.charCodeAt(pointer);
      }
      return deleteCost;
    }

    // If s2 is empty, then we need to delete all characters of s1
    if (j < 0) {
      let deleteCost = 0;
      for (let pointer = 0; pointer <= i; pointer++) {
        deleteCost += s1.charCodeAt(pointer);
      }
      return deleteCost;
    }

    // Check s1[i] and s2[j]
    if (s1.charAt(i) === s2.charAt(j)) {
      return computeCost(s1, s2, i - 1, j - 1);
    } else {
      return Math.min(
        s1.charCodeAt(i) + computeCost(s1, s2, i - 1, j),
        s2.charCodeAt(j) + computeCost(s1, s2, i, j - 1),
        s1.charCodeAt(i) + s2.charCodeAt(j) + computeCost(s1, s2, i - 1, j - 1)
      );
    }
  }
};

var s1 = 'sea',
  s2 = 'eat';
var expected = 231;
var result = minimumDeleteSum(s1, s2);
console.log(result, result === expected);

var s1 = 'delete',
  s2 = 'leet';
var expected = 403;
var result = minimumDeleteSum(s1, s2);
console.log(result, result === expected);
