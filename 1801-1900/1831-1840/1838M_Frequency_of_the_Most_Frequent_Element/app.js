// 1838. Frequency of the Most Frequent Element
// https://leetcode.com/problems/frequency-of-the-most-frequent-element/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  let result = 1;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    const target = nums[right];
    sum += target;
    while ((right - left + 1) * target > sum + k) {
      sum -= nums[left++];
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

var nums = [1, 2, 4],
  k = 5;
var expected = 3;
var result = maxFrequency(nums, k);
console.log(result, result === expected);

var nums = [1, 4, 8, 13],
  k = 5;
var expected = 2;
var result = maxFrequency(nums, k);
console.log(result, result === expected);

var nums = [3, 9, 6],
  k = 2;
var expected = 1;
var result = maxFrequency(nums, k);
console.log(result, result === expected);

var nums = [3, 9, 7],
  k = 2;
var expected = 2;
var result = maxFrequency(nums, k);
console.log(result, result === expected);

var nums = [3, 9, 7],
  k = 8;
var expected = 3;
var result = maxFrequency(nums, k);
console.log(result, result === expected);

var nums = [
    9930, 9923, 9983, 9997, 9934, 9952, 9945, 9914, 9985, 9982, 9970, 9932, 9985, 9902, 9975, 9990, 9922, 9990, 9994,
    9937, 9996, 9964, 9943, 9963, 9911, 9925, 9935, 9945, 9933, 9916, 9930, 9938, 10000, 9916, 9911, 9959, 9957, 9907,
    9913, 9916, 9993, 9930, 9975, 9924, 9988, 9923, 9910, 9925, 9977, 9981, 9927, 9930, 9927, 9925, 9923, 9904, 9928,
    9928, 9986, 9903, 9985, 9954, 9938, 9911, 9952, 9974, 9926, 9920, 9972, 9983, 9973, 9917, 9995, 9973, 9977, 9947,
    9936, 9975, 9954, 9932, 9964, 9972, 9935, 9946, 9966,
  ],
  k = 3056;
var expected = 73;
var result = maxFrequency(nums, k);
console.log(result, result === expected);
