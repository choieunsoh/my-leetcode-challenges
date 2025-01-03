// 2044. Count Number of Maximum Bitwise-OR Subsets
// https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/description/
// T.C.: O(n*m)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let maxOr = 0;
  for (const num of nums) {
    maxOr |= num;
  }

  const memo = Array.from({ length: nums.length }, () => new Array(maxOr + 1));
  return countMaxOr(0, 0);

  function countMaxOr(index, currOr) {
    if (index === nums.length) {
      return currOr === maxOr ? 1 : 0;
    }

    if (memo[index][currOr] !== undefined) {
      return memo[index][currOr];
    }

    const takeCount = countMaxOr(index + 1, currOr | nums[index]);
    const skipCount = countMaxOr(index + 1, currOr);
    return (memo[index][currOr] = takeCount + skipCount);
  }
};

var nums = [3, 1];
var expected = 2;
var result = countMaxOrSubsets(nums);
console.log(result, result === expected);

var nums = [2, 2, 2];
var expected = 7;
var result = countMaxOrSubsets(nums);
console.log(result, result === expected);

var nums = [3, 2, 1, 5];
var expected = 6;
var result = countMaxOrSubsets(nums);
console.log(result, result === expected);
