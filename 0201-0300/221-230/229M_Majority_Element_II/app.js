// 229. Majority Element II
// https://leetcode.com/problems/majority-element-ii/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums;

  const result = new Set();
  const n = nums.length;
  const minCount = n / 3;
  const counter = new Map();
  for (const num of nums) {
    const count = counter.get(num) ?? 0;
    counter.set(num, count + 1);
    if (count + 1 > minCount) result.add(num);
  }
  return [...result];
};

var nums = [3, 2, 3];
var expected = [3];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [1];
var expected = [1];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2];
var expected = [1, 2];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3];
var expected = [];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3, 4];
var expected = [];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 2, 2, 3, 3];
var expected = [2, 3];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());
