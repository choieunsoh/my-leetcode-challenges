// 2762. Continuous Subarrays
// https://leetcode.com/problems/continuous-subarrays/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let total = 0;

  // Initialize window with first element
  let curMin = nums[0];
  let curMax = nums[0];
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    // Update min and max for current window
    curMin = Math.min(curMin, nums[right]);
    curMax = Math.max(curMax, nums[right]);

    // If window condition breaks (diff > 2)
    if (curMax - curMin > 2) {
      // Add subarrays from previous valid window
      const windowLen = right - left;
      total += (windowLen * (windowLen + 1)) / 2;

      // Start new window at current position
      left = right;
      curMin = curMax = nums[right];

      // Expand left boundary while maintaining condition
      while (left > 0 && Math.abs(nums[right] - nums[left - 1]) <= 2) {
        left--;
        curMin = Math.min(curMin, nums[left]);
        curMax = Math.max(curMax, nums[left]);
      }

      // Remove over-counted subarrays if left boundary expanded
      if (left < right) {
        const windowLen = right - left;
        total -= (windowLen * (windowLen + 1)) / 2;
      }
    }

    right++;
  }

  // Add subarrays from final window
  const windowLen = right - left;
  total += (windowLen * (windowLen + 1)) / 2;

  return total;
};

var nums = [65, 66, 67, 66, 66, 65, 64, 65, 65, 64];
var expected = 43;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 4, 2, 4];
var expected = 8;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = 6;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [31, 30, 31, 32];
var expected = 10;
var result = continuousSubarrays(nums);
console.log(result, result === expected);
