// 2870. Minimum Number of Operations to Make Array Empty
// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const counts = new Map();
  for (const num of nums) {
    const count = counts.get(num) ?? 0;
    counts.set(num, count + 1);
  }

  let result = 0;
  for (const [, count] of counts) {
    if (count === 1) return -1;
    result += Math.ceil(count / 3);
  }

  return result;
};

var nums = [2, 3, 3, 2, 2, 4, 2, 3, 4];
var expected = 4;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [2, 1, 2, 2, 3, 3];
var expected = -1;
var result = minOperations(nums);
console.log(result, result === expected);
