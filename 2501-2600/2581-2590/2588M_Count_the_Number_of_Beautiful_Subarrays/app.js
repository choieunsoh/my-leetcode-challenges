// 2588. Count the Number of Beautiful Subarrays
// https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {
  let result = 0;
  let sum = 0;
  const counter = new Map([[0, 1]]);
  for (const num of nums) {
    sum ^= num;
    const count = counter.get(sum) ?? 0;
    result += count;
    counter.set(sum, count + 1);
  }
  return result;
};

var nums = [4, 3, 1, 2, 4];
var expected = 2;
var result = beautifulSubarrays(nums);
console.log(result, result == expected);

var nums = [1, 10, 4];
var expected = 0;
var result = beautifulSubarrays(nums);
console.log(result, result == expected);
