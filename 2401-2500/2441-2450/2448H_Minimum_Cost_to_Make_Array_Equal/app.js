// 2448. Minimum Cost to Make Array Equal
// https://leetcode.com/problems/minimum-cost-to-make-array-equal/
/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (nums, cost) {
  const n = nums.length;
  let left = Math.min(...nums);
  let right = Math.max(...nums);
  let result = Number.MAX_SAFE_INTEGER;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const cost1 = getCost(mid);
    const cost2 = getCost(mid + 1);
    result = Math.min(cost1, cost2);
    if (cost1 < cost2) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function getCost(base) {
    let totalCost = 0;
    for (let i = 0; i < n; i++) {
      totalCost += Math.abs(base - nums[i]) * cost[i];
    }
    return totalCost;
  }
};

var nums = [1, 3, 5, 2],
  cost = [2, 3, 1, 14];
var expected = 8;
var result = minCost(nums, cost);
console.log(result, result === expected);

var nums = [2, 2, 2, 2, 2],
  cost = [4, 2, 8, 1, 3];
var expected = 0;
var result = minCost(nums, cost);
console.log(result, result === expected);
