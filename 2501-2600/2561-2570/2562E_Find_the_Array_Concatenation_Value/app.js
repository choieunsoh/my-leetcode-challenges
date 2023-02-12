// 2562. Find the Array Concatenation Value
// https://leetcode.com/problems/find-the-array-concatenation-value/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let result = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const num1 = nums[left++];
    const num2 = nums[right--];
    result += Number(`${num1}${num2}`);
  }
  if (left === right) {
    result += nums[left];
  }
  return result;
};

var nums = [7, 52, 2, 4];
var expected = 596;
var result = findTheArrayConcVal(nums);
console.log(result, result === expected);

var nums = [5, 14, 13, 8, 12];
var expected = 673;
var result = findTheArrayConcVal(nums);
console.log(result, result === expected);
