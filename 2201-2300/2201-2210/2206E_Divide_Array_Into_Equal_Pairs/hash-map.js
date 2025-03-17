// 2206. Divide Array Into Equal Pairs
// https://leetcode.com/problems/divide-array-into-equal-pairs/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const frequency = new Map();
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
  }

  for (const [, count] of frequency) {
    if (count % 2 !== 0) {
      return false;
    }
  }

  return true;
};

var nums = [3, 2, 3, 2, 2, 2];
var expected = true;
var result = divideArray(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = false;
var result = divideArray(nums);
console.log(result, result === expected);
