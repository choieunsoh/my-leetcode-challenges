// 2465. Number of Distinct Averages
// https://leetcode.com/problems/number-of-distinct-averages/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  const distinct = new Set();
  while (left < right) {
    const avg = (nums[left++] + nums[right--]) / 2;
    distinct.add(avg);
  }
  return distinct.size;
};

var nums = [4, 1, 4, 0, 3, 5];
var expected = 2;
var result = distinctAverages(nums);
console.log(result, result === expected);

var nums = [1, 100];
var expected = 1;
var result = distinctAverages(nums);
console.log(result, result === expected);
