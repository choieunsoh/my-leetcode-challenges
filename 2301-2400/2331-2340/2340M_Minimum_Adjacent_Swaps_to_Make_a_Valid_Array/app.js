// 2340. Minimum Adjacent Swaps to Make a Valid Array
// https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function (nums) {
  const n = nums.length;
  let minIndex = n - 1;
  let maxIndex = 0;
  for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
    if (nums[j] <= nums[minIndex]) minIndex = j;
    if (nums[i] >= nums[maxIndex]) maxIndex = i;
  }

  let result = 0;
  if (maxIndex < minIndex) {
    result = minIndex - maxIndex;
    maxIndex = minIndex;
    minIndex--;
  }

  result += n - 1 - maxIndex + minIndex;
  return result;
};

var nums = [3, 4, 5, 5, 3, 1];
var expected = 6;
var result = minimumSwaps(nums);
console.log(result, result === expected);

var nums = [9];
var expected = 0;
var result = minimumSwaps(nums);
console.log(result, result === expected);

var nums = [1, 4, 5, 5, 3, 5];
var expected = 0;
var result = minimumSwaps(nums);
console.log(result, result === expected);

var nums = [1, 4, 5, 5, 3, 1];
var expected = 2;
var result = minimumSwaps(nums);
console.log(result, result === expected);

var nums = [2, 4, 1, 5, 3, 1];
var expected = 4;
var result = minimumSwaps(nums);
console.log(result, result === expected);

var nums = [2, 4, 5, 1, 3, 1];
var expected = 5;
var result = minimumSwaps(nums);
console.log(result, result === expected);
