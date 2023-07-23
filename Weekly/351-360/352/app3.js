/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let result = 0;
  const n = nums.length;
  let left = 0;
  let count = -1;
  for (let right = 0; right <= n; right++) {
    const valid = isValid(left, right);
    if (!valid) {
      count++;
      const size = right - left;
      result += ((size + 1) * size) / 2;
      console.log({ right, left, size, result, count });
      left = right - 1;
    }
  }
  return result - count;

  function isValid(i, j) {
    return Math.abs(nums[i] - nums[j]) <= 2;
  }
};

var nums = [65, 66, 67, 66, 66, 65, 64, 65, 65, 64];
var expected = 43;
var result = continuousSubarrays(nums);
console.log(result, result === expected);
return;
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
