// 2164. Sort Even and Odd Indices Independently
// https://leetcode.com/problems/sort-even-and-odd-indices-independently/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  const odd = [];
  const even = [];
  for (let i = 0; i < nums.length; i += 2) {
    even.push(nums[i]);
    if (i + 1 < nums.length) odd.push(nums[i + 1]);
  }
  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);

  const result = [];
  for (let i = 0; i < nums.length / 2; i++) {
    result.push(even[i]);
    if (i < odd.length) result.push(odd[i]);
  }

  return result;
};

var nums = [4, 1, 2, 3];
var expected = [2, 3, 4, 1];
var result = sortEvenOdd(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 1];
var expected = [2, 1];
var result = sortEvenOdd(nums);
console.log(result, result.join() === expected.join());

var nums = [5, 39, 33, 5, 12, 27, 20, 45, 14, 25, 32, 33, 30, 30, 9, 14, 44, 15, 21];
var expected = [5, 45, 9, 39, 12, 33, 14, 30, 20, 27, 21, 25, 30, 15, 32, 14, 33, 5, 44];
var result = sortEvenOdd(nums);
console.log(result, result.join() === expected.join());
