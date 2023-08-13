// 2369. Check if There is a Valid Partition For The Array
// https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function (nums) {
  const n = nums.length;
  const dp = [true, false, false];
  for (let i = 0; i < n; i++) {
    let valid = false;
    const index = i + 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      valid ||= dp[(index - 2) % 3];
    }
    if (i > 1 && nums[i] === nums[i - 1] && nums[i] === nums[i - 2]) {
      valid ||= dp[(index - 3) % 3];
    }
    if (i > 1 && nums[i] - 1 === nums[i - 1] && nums[i] - 2 === nums[i - 2]) {
      valid ||= dp[(index - 3) % 3];
    }
    dp[index % 3] = valid;
  }
  return dp[n % 3];
};

var nums = [4, 4, 4, 5, 6];
var expected = true;
var result = validPartition(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 2];
var expected = false;
var result = validPartition(nums);
console.log(result, result === expected);
