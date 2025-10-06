// 2913. Subarrays Distinct Element Sum of Squares I
// https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const seen = new Set();
    for (let j = i; j < n; j++) {
      seen.add(nums[j]);
      sum += seen.size ** 2;
    }
  }
  return sum;
};

var nums = [1, 2, 1];
var expected = 15;
var result = sumCounts(nums);
console.log(result, result === expected);

var nums = [1, 1];
var expected = 3;
var result = sumCounts(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = 20;
var result = sumCounts(nums);
console.log(result, result === expected);
