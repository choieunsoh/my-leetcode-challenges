// 3011. Find if Array Can Be Sorted
// https://leetcode.com/problems/find-if-array-can-be-sorted/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  let currMin = nums[0];
  let currMax = nums[0];
  let prevMax = Number.MIN_SAFE_INTEGER;
  let prevSetBits = bitCount(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const currSetBits = bitCount(nums[i]);
    if (currSetBits === prevSetBits) {
      currMin = Math.min(currMin, nums[i]);
      currMax = Math.max(currMax, nums[i]);
    } else {
      if (currMin < prevMax) {
        return false;
      }

      prevMax = currMax;
      prevSetBits = currSetBits;
      currMin = nums[i];
      currMax = nums[i];
    }
  }

  if (currMin < prevMax) {
    return false;
  }
  return true;

  function bitCount(num) {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  }
};

var nums = [8, 4, 2, 30, 15];
var expected = true;
var result = canSortArray(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = true;
var result = canSortArray(nums);
console.log(result, result === expected);

var nums = [3, 16, 8, 4, 2];
var expected = false;
var result = canSortArray(nums);
console.log(result, result === expected);

var nums = [1, 256, 64];
var expected = true;
var result = canSortArray(nums);
console.log(result, result === expected);
