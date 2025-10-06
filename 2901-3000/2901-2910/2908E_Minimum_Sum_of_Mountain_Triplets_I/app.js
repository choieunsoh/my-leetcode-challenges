// 2908. Minimum Sum of Mountain Triplets I
// https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  let minSum = Infinity;
  const n = nums.length;
  for (let mid = 1; mid < n - 1; mid++) {
    const midHeight = nums[mid];
    let leftHeight = Infinity;
    for (let left = 0; left < mid; left++) {
      if (nums[left] < midHeight) {
        leftHeight = Math.min(leftHeight, nums[left]);
      }
    }
    if (leftHeight === Infinity) continue;

    let rightHeight = Infinity;
    for (let right = mid + 1; right < n; right++) {
      if (nums[right] < midHeight) {
        rightHeight = Math.min(rightHeight, nums[right]);
      }
    }
    if (rightHeight === Infinity) continue;

    minSum = Math.min(minSum, leftHeight + midHeight + rightHeight);
  }

  return minSum === Infinity ? -1 : minSum;
};

var nums = [8, 6, 1, 5, 3];
var expected = 9;
var result = minimumSum(nums);
console.log(result, result === expected);

var nums = [5, 4, 8, 7, 10, 2];
var expected = 13;
var result = minimumSum(nums);
console.log(result, result === expected);

var nums = [6, 5, 4, 3, 4, 5];
var expected = -1;
var result = minimumSum(nums);
console.log(result, result === expected);
