// 2460. Apply Operations to an Array
// https://leetcode.com/problems/apply-operations-to-an-array/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const n = nums.length;
  const modifiedNums = new Array(n);
  let zeroCount = 0;

  // Step 1: Apply operations on the array
  for (let index = 0; index < n - 1; index++) {
    if (nums[index] === nums[index + 1] && nums[index] !== 0) {
      nums[index] *= 2;
      nums[index + 1] = 0;
    }
  }

  // Step 2: Move non-zero elements to the front
  for (const num of nums) {
    if (num !== 0) {
      modifiedNums[zeroCount++] = num;
    }
  }

  // Step 3: Append zeros to maintain the original size
  while (zeroCount < n) {
    modifiedNums[zeroCount++] = 0;
  }

  return modifiedNums;
};

var nums = [1, 2, 2, 1, 1, 0];
var expected = [1, 4, 2, 0, 0, 0];
var result = applyOperations(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 1];
var expected = [1, 0];
var result = applyOperations(nums);
console.log(result, result.join() === expected.join());
