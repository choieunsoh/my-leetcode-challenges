// 1887. Reduction Operations to Make the Array Elements Equal
// https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
  nums.sort((a, b) => b - a);
  let result = 0;
  const min = nums.at(-1);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      result += i;
      if (nums[i] === min) break;
    }
  }
  return result;
};

var nums = [5, 1, 3];
var expected = 3;
var result = reductionOperations(nums);
console.log(result, result === expected);

var nums = [1, 1, 1];
var expected = 0;
var result = reductionOperations(nums);
console.log(result, result === expected);

var nums = [1, 1, 2, 2, 3];
var expected = 4;
var result = reductionOperations(nums);
console.log(result, result === expected);
