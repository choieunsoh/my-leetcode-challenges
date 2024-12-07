// 644. Maximum Average Subarray II
// https://leetcode.com/problems/maximum-average-subarray-ii/description/
// T.C.: O(n log k)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  const ERROR = 1e-5;
  let min = nums[0];
  let max = nums[0];
  for (const num of nums) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  while (min <= max) {
    const mid = (min + max) / 2;
    if (hasAvgAbove(nums, k, mid)) {
      min = mid + ERROR;
    } else {
      max = mid - ERROR;
    }
  }
  return Number(max.toFixed(5));

  function hasAvgAbove(nums, k, target) {
    let sum = 0;
    let extraSum = 0;
    for (let i = 0; i < k; i++) {
      sum += nums[i] - target;
    }

    // must have at least k elements; the nums before the last k element should be kept if their sum > 0;
    // else we should remove them from the current sum (equivalent to update the start position)
    let curr = k;
    while (curr < nums.length) {
      if (sum >= 0) return true;

      sum += nums[curr] - target;
      extraSum += nums[curr - k] - target;
      if (extraSum < 0) {
        // update the start position of the current sum
        sum -= extraSum;
        extraSum = 0;
      }
      curr++;
    }
    return sum >= 0;
  }
};

var nums = [1, 12, -5, -6, 50, 3],
  k = 4;
var expected = 12.75;
var result = findMaxAverage(nums, k);
console.log(result, result === expected);

var nums = [5],
  k = 1;
var expected = 5.0;
var result = findMaxAverage(nums, k);
console.log(result, result === expected);
