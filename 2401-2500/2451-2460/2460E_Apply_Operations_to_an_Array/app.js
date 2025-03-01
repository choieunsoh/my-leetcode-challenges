// 2460. Apply Operations to an Array
// https://leetcode.com/problems/apply-operations-to-an-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
      i++;
    }
  }

  let left = 0;
  let right = 0;
  while (right < n) {
    if (nums[right] === 0) {
      right++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right++;
    }
  }
  return nums;
};

var nums = [1, 2, 2, 1, 1, 0];
var expected = [1, 4, 2, 0, 0, 0];
var result = applyOperations(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 1];
var expected = [1, 0];
var result = applyOperations(nums);
console.log(result, result.join() === expected.join());
