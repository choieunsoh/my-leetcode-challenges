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
  let memo = new Array(n2 + 1).fill(0);
  for (let i = 1; i <= n1; i++) {
    const curr = new Array(n2 + 1).fill(0);
    for (let j = 1; j <= n2; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        curr[j] = 1 + memo[j - 1];
      } else {
        curr[j] = Math.max(curr[j - 1], memo[j]);
      }
    }
    memo = curr;
  }
  return memo[n2];
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
