// https://leetcode.com/problems/sort-array-by-parity-ii/
// 922. Sort Array By Parity II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const N = nums.length;
  let even = 0;
  let odd = 1;
  while (even < N && odd < N) {
    while (even < N && nums[even] % 2 === 0) even += 2;
    while (odd < N && nums[odd] % 2 === 1) odd += 2;
    if (even < N && odd < N) {
      [nums[even], nums[odd]] = [nums[odd], nums[even]];
    }
  }
  return nums;
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
