// 1035. Uncrossed Lines
// https://leetcode.com/problems/uncrossed-lines/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  const n1 = nums1.length;
  const n2 = nums2.length;
  const memo = Array.from({ length: n1 + 1 }, () => new Array(n2 + 1).fill(-1));
  return solve(n1, n2);

  function solve(i, j) {
    if (i <= 0 || j <= 0) return 0;
    if (memo[i][j] !== -1) return memo[i][j];

    if (nums1[i - 1] === nums2[j - 1]) {
      memo[i][j] = 1 + solve(i - 1, j - 1);
    } else {
      const pickNums1 = solve(i - 1, j);
      const pickNums2 = solve(i, j - 1);
      memo[i][j] = Math.max(pickNums1, pickNums2);
    }
    return memo[i][j];
  }
};

var nums1 = [1, 4, 2],
  nums2 = [1, 2, 4];
var expected = 2;
var result = maxUncrossedLines(nums1, nums2);
console.log(result, result === expected);

var nums1 = [2, 5, 1, 2, 5],
  nums2 = [10, 5, 2, 1, 5, 2];
var expected = 3;
var result = maxUncrossedLines(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 3, 7, 1, 7, 5],
  nums2 = [1, 9, 2, 5, 1];
var expected = 2;
var result = maxUncrossedLines(nums1, nums2);
console.log(result, result === expected);
