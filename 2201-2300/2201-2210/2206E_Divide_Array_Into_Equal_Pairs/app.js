// 2206. Divide Array Into Equal Pairs
// https://leetcode.com/problems/divide-array-into-equal-pairs/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      seen.delete(num);
    } else {
      seen.add(num);
    }
  }
  return seen.size === 0;
};

var nums = [3, 2, 3, 2, 2, 2];
var expected = true;
var result = divideArray(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = false;
var result = divideArray(nums);
console.log(result, result === expected);
