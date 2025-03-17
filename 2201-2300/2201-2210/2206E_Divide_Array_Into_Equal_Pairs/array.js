// 2206. Divide Array Into Equal Pairs
// https://leetcode.com/problems/divide-array-into-equal-pairs/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const maxNum = Math.max(...nums);
  const needsPair = new Array(maxNum + 1).fill(false);
  for (const num of nums) {
    needsPair[num] = !needsPair[num];
  }

  for (const num of nums) {
    if (needsPair[num]) {
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
