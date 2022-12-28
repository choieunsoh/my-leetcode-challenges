// 698. Partition to K Equal Sum Subsets
// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  const max = Math.max(...nums);
  const sum = nums.reduce((s, x) => s + x, 0);
  if (sum % k !== 0 || max > sum) return false;

  const subsets = Array(k).fill(0);
  nums.sort((a, b) => b - a);

  function dfs(nums, k, index, target, subsets) {
    if (index >= nums.length) return true;

    const visited = new Set();
    const num = nums[index];

    for (let i = 0; i < k; i++) {
      const sum = subsets[i];
      if (visited.has(sum) || sum + num > target) continue;

      visited.add(sum);
      subsets[i] += num;
      if (dfs(nums, k, index + 1, target, subsets)) return true;
      subsets[i] -= num;
    }
    return false;
  }

  return dfs(nums, k, 0, sum / k, subsets);
};

var nums = [4, 3, 2, 3, 5, 2, 1],
  k = 4;
var expected = true;
var result = canPartitionKSubsets(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  k = 3;
var expected = false;
var result = canPartitionKSubsets(nums, k);
console.log(result, result === expected);
