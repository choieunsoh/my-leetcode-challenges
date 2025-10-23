// 2190. Most Frequent Number Following Key In an Array
// https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  let target = 0;
  let maxCount = 0;
  const counts = new Array(1001).fill(0);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== key) continue;

    const num = nums[i + 1];
    counts[num]++;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      target = num;
    }
  }
  return target;
};

var nums = [1, 100, 200, 1, 100],
  key = 1;
var expected = 100;
var result = mostFrequent(nums, key);
console.log(result, result === expected);

var nums = [2, 2, 2, 2, 3],
  key = 2;
var expected = 2;
var result = mostFrequent(nums, key);
console.log(result, result === expected);
