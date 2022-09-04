// https://leetcode.com/problems/sort-array-by-parity-ii/
// 922. Sort Array By Parity II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const even = [];
  const odd = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? even.push(nums[i]) : odd.push(nums[i]);
  }

  const result = [];
  for (let i = 0; i < nums.length / 2; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }

  return result;
};

var nums = [4, 2, 5, 7];
var expected = [4, 5, 2, 7];
var result = sortArrayByParityII(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 3];
var expected = [2, 3];
var result = sortArrayByParityII(nums);
console.log(result, result.join() === expected.join());

var nums = [3, 4];
var expected = [4, 3];
var result = sortArrayByParityII(nums);
console.log(result, result.join() === expected.join());

var nums = [4, 1, 4, 1];
var expected = [4, 1, 4, 1];
var result = sortArrayByParityII(nums);
console.log(result, result.join() === expected.join());
