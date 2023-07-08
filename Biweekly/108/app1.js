/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
  const n = nums.length;
  let result = 0;
  let state = Infinity;
  let right = 1;
  let left = 0;
  while (right < n) {
    let diff = nums[right] - nums[right - 1];
    if (Math.abs(diff) === 1) {
      if (diff === state * -1) {
        result = Math.max(result, right - left + 1);
        state *= -1;
      } else {
        if (diff === 1) {
          state = diff;
          left = right - 1;
          result = Math.max(result, right - left + 1);
        } else {
          state = Infinity;
        }
      }
    } else {
      state = Infinity;
    }
    right++;
  }

  return result ? result : -1;
};

var nums = [2, 3, 4, 3, 4];
var expected = 4;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [4, 5, 6];
var expected = 2;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [2, 5, 7];
var expected = -1;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [22, 23];
var expected = 2;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [14, 30, 29, 49, 3, 23, 44, 21, 26, 52];
var expected = -1;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [50, 93, 71, 18, 61, 2, 57, 58];
var expected = 2;
var result = alternatingSubarray(nums);
console.log(result, result === expected);

var nums = [6, 12, 2, 3, 8, 9, 10, 10, 2, 1];
var expected = 2;
var result = alternatingSubarray(nums);
console.log(result, result === expected);
