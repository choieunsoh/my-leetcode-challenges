// https://leetcode.com/problems/array-partition-i/
// 561. Array Partition I
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

var nums = [1, 4, 3, 2];
var expected = 4;
console.log(arrayPairSum(nums), expected);

var nums = [6, 2, 6, 5, 1, 2];
var expected = 9;
console.log(arrayPairSum(nums), expected);
