// 3046. Split the Array
// https://leetcode.com/problems/split-the-array/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  const freq = new Array(101).fill(0);
  for (const num of nums) {
    if (++freq[num] > 2) return false;
  }
  return true;
};

var nums = [1, 1, 2, 2, 3, 4];
var expected = true;
var result = isPossibleToSplit(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 1];
var expected = false;
var result = isPossibleToSplit(nums);
console.log(result, result === expected);
